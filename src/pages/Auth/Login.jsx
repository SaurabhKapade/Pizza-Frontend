import { useState } from "react";
import LoginPresentation from "./LoginPresentation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Slices/AuthSlice";
import toast from "react-hot-toast";

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginState,setLoginState] = useState({
        email:'',
        password:'',
    })
    function handleLoginInput(e){
        const {name , value} = e.target
        setLoginState({
            ...loginState,
            [name]:value
        })
    }
    async function handleLoginSubmit(e){
        e.preventDefault();

        if (!loginState.email || !loginState.password) {
            toast.error('Missing values from the form', { duration: 1000 });
            return;
        }

        if (!loginState.email.includes('@') || !loginState.email.includes('.')) {
            toast.error('Invalid Email', { duration: 1000 });
            return;
        }

        const apiResponse = await dispatch(login(loginState))
        if(apiResponse.payload.data.success){
            navigate('/')
        }
    }

  
    return (
        <>
           <LoginPresentation handleLoginInput={handleLoginInput} handleLoginSubmit={handleLoginSubmit}/>
        </>
    )
}

export default Login;