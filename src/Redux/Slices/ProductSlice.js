import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    productsData : [],
    isLoading:true,
}

export const fetchProducts = createAsyncThunk('/get/AllProducts',async()=>{
    try{
        const response = await  axiosInstance.get('/product/')
        const apiResponse =  response
        return apiResponse
    }catch(error){
        console.log('error is',error)
        toast.error('cannot load products...')
    }
})

export const fectchProduct = createAsyncThunk('/get/Product',async(id)=>{
    try {
        const response = await axiosInstance.get(`/product/${id}`)
        return  response
    } catch (error) {
        console.log(error)
        toast.error('cannot get Product...')
    }
})

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productsData = action?.payload?.data?.data
            state.isLoading = false
        })
    }
})

export default productSlice.reducer