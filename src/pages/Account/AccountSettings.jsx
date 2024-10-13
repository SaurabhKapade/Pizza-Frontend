import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../Redux/Slices/UserSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AccountSettings() {
  const { email ,id} = useSelector((state) => ({
    email: state.auth.data.email,
    id:state.auth.data.id
  }));
  const { firstName, lastName, userEmail, mobileNo } = useSelector((state) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    userEmail: state.user.email,
    mobileNo: state.user.mobileNo,
  }));

  const dispatch = useDispatch();

  const [personalEdit, setPersonalEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [mobEdit, setMobEdit] = useState(false);

  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });

  const [initialUserState, setInitialUserState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });

  async function getData() {
    await dispatch(getUser(email));
  }

  function handlePersonalCheck() {
    if (personalEdit) {
      setUserState(initialUserState);
    } else {
      setUserState({
        firstName,
        lastName,
        email: userEmail,
        mobileNumber: mobileNo,
      });
    }
    setPersonalEdit(!personalEdit);
  }

  function handleEmailCheck() {
    if (emailEdit) {
      setUserState((prevState) => ({
        ...prevState,
        email: userEmail,
      }));
    } else {
      setUserState((prevState) => ({
        ...prevState,
        email: userEmail,
      }));
    }
    setEmailEdit(!emailEdit);
  }

  function handleMobileCheck() {
    if (mobEdit) {
      setUserState((prevState) => ({
        ...prevState,
        mobileNumber: mobileNo,
      }));
    } else {
      setUserState((prevState) => ({
        ...prevState,
        mobileNumber: mobileNo,
      }));
    }
    setMobEdit(!mobEdit);
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value });
  }

 async function handleUserSubmit(e) {
    e.preventDefault();
    console.log(userState)
    const response = await dispatch(updateUser({...userState,'id':id}))
    console.log('response fun is ',response)
    setPersonalEdit(!personalEdit)
    window.location.reload()
  }
  async  function handleEmailSubmit(e) {
    e.preventDefault();
    const response = await dispatch(updateUser({...userState,'id':id}))
    console.log('response fun is ',response)
    setEmailEdit(!emailEdit)
  }
  async function handleMobSubmit(e) {
    e.preventDefault();
    const response = await dispatch(updateUser({...userState,'id':id}))
    console.log('response fun is ',response)
    setMobEdit(!mobEdit)
  }
 //  Implement delete user Functionality
 // fetch cart of user by userId
 // delete cart first then delete user
  function handleAccountDel(){
    toast.error('sorry...Sever issue!!!',{duration:1000})
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setInitialUserState({
      firstName,
      lastName,
      email: userEmail,
      mobileNumber: mobileNo,
    });
    setUserState({
      firstName,
      lastName,
      email: userEmail,
      mobileNumber: mobileNo,
    });
  }, [firstName, lastName, userEmail, mobileNo]);

  return (
    // <div className="hidden md:w-full flex flex-col ">
    //   <div className="flex gap-4 items-center">
    //     <h1 className="text-black text-xl font-semibold">Personal Information</h1>
    //     {personalEdit ? (
    //       <span className="text-orange-400 font-medium text-lg mt-1 cursor-pointer" onClick={handlePersonalCheck}>
    //         Cancel
    //       </span>
    //     ) : (
    //       <span className="text-orange-400 font-medium text-lg mt-1 cursor-pointer" onClick={handlePersonalCheck}>
    //         Edit
    //       </span>
    //     )}
    //   </div>

    //   <div className="mt-4 flex gap-3">
    //     <input
    //       type="text"
    //       id="firstName"
    //       name="firstName"
    //       onChange={handleUserInput}
    //       value={userState.firstName}
    //       disabled={!personalEdit}
    //       style={{ width: "30%" }}
    //       className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    //     />
    //     <input
    //       type="text"
    //       id="lastName"
    //       name="lastName"
    //       onChange={handleUserInput}
    //       value={userState.lastName}
    //       disabled={!personalEdit}
    //       style={{ width: "30%" }}
    //       className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    //     />

    //     {personalEdit && (
    //       <button className="px-3 py-3 bg-orange-600 text-white font-semibold" style={{ width: "15%" }} onClick={handleUserSubmit}>
    //         SAVE
    //       </button>
    //     )}
    //   </div>

    //   <div className="flex gap-4 items-center mt-5">
    //     <h1 className="text-black text-xl font-semibold">E-mail Address</h1>
    //     {emailEdit ? (
    //       <span className="text-orange-400 font-medium text-lg mt-1 cursor-pointer" onClick={handleEmailCheck}>
    //         Cancel
    //       </span>
    //     ) : (
    //       <span className="text-orange-400 font-medium text-lg mt-1 cursor-pointer" onClick={handleEmailCheck}>
    //         Edit
    //       </span>
    //     )}
    //   </div>

    //   <div className="mt-4 flex gap-3">
    //     <input
    //       type="text"
    //       id="email"
    //       name="email"
    //       onChange={handleUserInput}
    //       value={userState.email}
    //       disabled={!emailEdit}
    //       style={{ width: "30%" }}
    //       className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    //     />

    //     {emailEdit && (
    //       <button className="px-3 py-3 bg-orange-600 text-white font-semibold" style={{ width: "15%" }} onClick={handleEmailSubmit}>
    //         SAVE
    //       </button>
    //     )}
    //   </div>

    //   <div className="flex gap-4 items-center mt-5">
    //     <h1 className="text-black text-xl font-semibold">Mobile Number</h1>
    //     {mobEdit ? (
    //       <span className="text-orange-400 font-medium text-lg mt-1 cursor-pointer" onClick={handleMobileCheck}>
    //         Cancel
    //       </span>
    //     ) : (
    //       <span className="text-orange-400 font-medium text-lg mt-1 cursor-pointer" onClick={handleMobileCheck}>
    //         Edit
    //       </span>
    //     )}
    //   </div>

    //   <div className="mt-4 flex gap-3">
    //     <input
    //       type="text"
    //       id="mobile"
    //       name="mobileNumber"
    //       onChange={handleUserInput}
    //       value={userState.mobileNumber}
    //       disabled={!mobEdit}
    //       style={{ width: "30%" }}
    //       className="px-3 py-3 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    //     />

    //     {mobEdit && (
    //       <button className="px-3 py-3 bg-orange-600 text-white font-semibold" style={{ width: "15%" }} onClick={handleMobSubmit}>
    //         SAVE
    //       </button>
    //     )}
    //   </div>
    //   <div className="text-red-500 font-semibold cursor-pointer mt-auto" onClick={handleAccountDel}>Delete Account</div>
    // </div>
    <div className="w-full flex flex-col p-4">
  <div className="flex gap-2 items-center">
    <h1 className="text-black text-lg font-semibold">Personal Information</h1>
    {personalEdit ? (
      <span className="text-orange-400 font-medium text-md mt-1 cursor-pointer" onClick={handlePersonalCheck}>
        Cancel
      </span>
    ) : (
      <span className="text-orange-400 font-medium text-md mt-1 cursor-pointer" onClick={handlePersonalCheck}>
        Edit
      </span>
    )}
  </div>

  <div className="mt-4 flex flex-col gap-3">
    <input
      type="text"
      id="firstName"
      name="firstName"
      onChange={handleUserInput}
      value={userState.firstName}
      disabled={!personalEdit}
      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    />
    <input
      type="text"
      id="lastName"
      name="lastName"
      onChange={handleUserInput}
      value={userState.lastName}
      disabled={!personalEdit}
      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    />

    {personalEdit && (
      <button className="w-full px-3 py-2 bg-orange-600 text-white font-semibold" onClick={handleUserSubmit}>
        SAVE
      </button>
    )}
  </div>

  <div className="flex gap-2 items-center mt-5">
    <h1 className="text-black text-lg font-semibold">E-mail Address</h1>
    {emailEdit ? (
      <span className="text-orange-400 font-medium text-md mt-1 cursor-pointer" onClick={handleEmailCheck}>
        Cancel
      </span>
    ) : (
      <span className="text-orange-400 font-medium text-md mt-1 cursor-pointer" onClick={handleEmailCheck}>
        Edit
      </span>
    )}
  </div>

  <div className="mt-4 flex flex-col gap-3">
    <input
      type="text"
      id="email"
      name="email"
      onChange={handleUserInput}
      value={userState.email}
      disabled={!emailEdit}
      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    />

    {emailEdit && (
      <button className="w-full px-3 py-2 bg-orange-600 text-white font-semibold" onClick={handleEmailSubmit}>
        SAVE
      </button>
    )}
  </div>

  <div className="flex gap-2 items-center mt-5">
    <h1 className="text-black text-lg font-semibold">Mobile Number</h1>
    {mobEdit ? (
      <span className="text-orange-400 font-medium text-md mt-1 cursor-pointer" onClick={handleMobileCheck}>
        Cancel
      </span>
    ) : (
      <span className="text-orange-400 font-medium text-md mt-1 cursor-pointer" onClick={handleMobileCheck}>
        Edit
      </span>
    )}
  </div>

  <div className="mt-4 flex flex-col gap-3">
    <input
      type="text"
      id="mobile"
      name="mobileNumber"
      onChange={handleUserInput}
      value={userState.mobileNumber}
      disabled={!mobEdit}
      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-orange-200"
    />

    {mobEdit && (
      <button className="w-full px-3 py-2 bg-orange-600 text-white font-semibold" onClick={handleMobSubmit}>
        SAVE
      </button>
    )}
  </div>

  <div className="text-red-500 font-semibold cursor-pointer mt-5" onClick={handleAccountDel}>
    Delete Account
  </div>
</div>

  );
}

export default AccountSettings;