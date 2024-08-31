import { configureStore } from "@reduxjs/toolkit"
import AuthSliceReducer from "./Slices/AuthSlice";
export const sotre = configureStore({
    reducer:{
        auth:AuthSliceReducer
    }
});