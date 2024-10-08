import { configureStore } from "@reduxjs/toolkit"
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductSliceReducer from "./Slices/ProductSlice";
import AddProductSliceReducer from "./Slices/AddProductSlice";
import CartSliceReducer from "./Slices/CartSlice";
export const sotre = configureStore({
    reducer:{
        auth:AuthSliceReducer,
        addProduct:AddProductSliceReducer,
        product:ProductSliceReducer,
        cart:CartSliceReducer
    }
});