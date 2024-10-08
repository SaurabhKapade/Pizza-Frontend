import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState={
    products:[],
    length:0
}
export const addToCart= createAsyncThunk('/Cart/Add',async(id)=>{
    try {
        const response = await axiosInstance.post(`/carts/add/${id}`)
        toast.success(response.data?.message)
        return response.data
    } catch (error) {
        toast.error(error.response?.data?.message)
    }
})
export const removeFromCart= createAsyncThunk('/Cart/Remove',async(id)=>{
    try {
        const response = await axiosInstance.post(`/carts/remove/${id}`)
        toast.success('product Removed from Cart')
        return response.data
    } catch (error) {
        toast.error(error.response?.data?.message)
    }
})
export const getCartDetails = createAsyncThunk('/Cart/getCart',async()=>{
    try{
        const response = await axiosInstance.get('/carts')
        return response.data
    }catch(error){
        toast.error('Something went wrong')
    }
})
export const removeItem = createAsyncThunk('/Cart/removeItem',async(id)=>{
    try{
        const response = await axiosInstance.delete(`/carts/products/remove/${id}`);
        toast.success('Item removed from cart')
        return response.data
    }catch(error){
        toast.error('Something went wrong...')
    }
})
const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.products = action.payload?.data?.data?.items
            state.length = action.payload?.data?.data?.items?.length
        })
    }
})
export default CartSlice.reducer