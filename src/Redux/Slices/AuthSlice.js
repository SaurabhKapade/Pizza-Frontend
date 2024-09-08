import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";
const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn')==='true' || false,
    role:localStorage.getItem('role') || '',
    data:JSON.parse(localStorage.getItem('data')) || {}
}


export const createAccount = createAsyncThunk('/Auth/createAccount',async(data)=>{
    try{
        const response = axiosInstance.post('/users',data)
        toast.promise(response,{
            success:(resolvedPromise)=>{
                console.log('resolvedPromise is ',resolvedPromise)
                return resolvedPromise?.data?.message;
            },
            loading:'Hold back tight we are registering you',
            error:(error)=>{
                console.log('promise is ',error)
                return error.response.data.message
            },
        })
        
        const apiResponse = await response
        return apiResponse
    }catch(error){
        console.log(error)
    }
})

export const login = createAsyncThunk('Auth/login',async(data)=>{
    try{
        const response = axiosInstance.post('/auth/login',data)
        toast.promise(response,{
            success:(resolvedPromise)=>{
                return resolvedPromise?.data?.message;
            },
            loading:'Wait for a short',
            error:(error)=>{
                console.log('promise is ',error)
                return error.response.data.message
            },
        })
        
        const apiResponse = await response
        return apiResponse
    }catch(error){
        console.log(error)
    }
})

export const logout = createAsyncThunk('/Auth/logout',async()=>{
    try {
        const response = axiosInstance.post('/auth/logout')
        toast.promise(response,{
            success:(resolvedPromise)=>{
                return resolvedPromise?.data?.message;
            },
            loading:'Wait for a short',
            error:(error)=>{
                console.log('promise is ',error)
                return error.response.data.message
            },
        })
        
        const apiResponse = await response
        return apiResponse
    } catch (error) {
        console.log(error)
    }
})
const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoggedIn = true
            state.role = action?.payload?.data?.data?.userRole
            state.data = action?.payload?.data?.data?.userData

            localStorage.setItem('isLoggedIn',true)
            localStorage.setItem('role',action?.payload?.data?.data?.userRole)
            localStorage.setItem('data',JSON.stringify(action?.payload?.data?.data?.userData))
            console.log(action?.payload?.data)
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear()
            state.isLoggedIn = false
            state.role = ''
            state.data = {}
        })
    }
})

export default AuthSlice.reducer