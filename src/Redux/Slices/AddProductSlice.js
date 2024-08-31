import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";
const initialState = {
    productName: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    productImage:null, // null for the file input
};

export const addProduct = createAsyncThunk('/Add/Product',async(data)=>{
    try{
        // const response = axiosInstance.post('/product/add',data)
        const response = await axiosInstance.post('/product/add', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
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
const AddProductSlice = createSlice({
    name:'addProduct',
    initialState,
    reducers:{},

})

export default AddProductSlice.reducer