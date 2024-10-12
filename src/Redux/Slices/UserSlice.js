import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";
const initialState={
    firstName:"",
    lastName:"",
    email:"",
    mobileNo:"",
}
export const getUser = createAsyncThunk('/User/GetUser',async(email)=>{
    try{
        const response = await axiosInstance.get(`/users/getUser?email=${email}`)
        return response.data
    }catch(err){
        toast.error('Something went wrong')
    }
})

export const updateUser = createAsyncThunk('/Users/updateUser',async(userDetails)=>{
    try{
        const response = await axiosInstance.post('/users/updateUser',userDetails)
        toast.success('Information Updated Successfully')
        return response.data
    }catch(error){
        toast.error('something went wrong')
    }
})

const UserSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUser.fulfilled,(state,action)=>{
            state.firstName = action.payload?.data.firstName
            state.lastName = action.payload?.data.lastName
            state.email = action.payload?.data.email
            state.mobileNo = action.payload?.data.mobileNumber
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
            console.log('payload is',action.payload)
            const userData={email:action.payload.data.email,
                firstName:action.payload.data.firstName,
                id:action.payload.data._id
            }
            localStorage.setItem('isLoggedIn',true)
            localStorage.setItem('role',action?.payload?.data?.role)
            localStorage.setItem('data',JSON.stringify(userData))
        })
    }
})
export default UserSlice.reducer