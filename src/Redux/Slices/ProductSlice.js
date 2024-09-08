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
        // toast.promise(response,{
        //    loading:'loading all the products',
        //    error:'Something went wront, Cannot load Products',
        //    success:'Products loaded successfully'
        // })
        
        const apiResponse =  response
        console.log('api response is ',apiResponse)
        return apiResponse
    }catch(error){
        console.log('error is',error)
        toast.error('cannot load products...')
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