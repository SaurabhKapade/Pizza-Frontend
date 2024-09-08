import { configureStore } from "@reduxjs/toolkit"
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductSliceReducer from "./Slices/ProductSlice";
import AddProductSliceReducer from "./Slices/AddProductSlice";
export const sotre = configureStore({
    reducer:{
        auth:AuthSliceReducer,
        addProduct:AddProductSliceReducer,
        product:ProductSliceReducer
    }
});