import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignUpPresentation";
import { useDispatch } from "react-redux"
import { createAccount } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [signUpState, setSignUpState] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        password: '',
        email: ''
    });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignUpState({
            ...signUpState,
            [name]: value
        });
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        if (!signUpState.email || !signUpState.firstName || !signUpState.lastName || !signUpState.mobileNumber || !signUpState.password) {
            toast.error('Missing values from the form', { duration: 1000 });
            return;
        }

        if (signUpState.firstName.length < 3 || signUpState.firstName.length > 10) {
            toast.error('First Name should contain 3-10 characters', { duration: 1000 });
            return;
        }

        if (!signUpState.email.includes('@') || !signUpState.email.includes('.')) {
            toast.error('InValid email', { duration: 1000 });
            return;
        }

        const apiResponse = await dispatch(createAccount(signUpState))
        if(apiResponse.payload.data.success){
            navigate('/auth/login')
        }
    }

    return (
        <>
            <SignUpPresentation handleUserInput={handleUserInput} handleFormSubmit={handleFormSubmit} />
        </>
    );
}

export default SignUp;
