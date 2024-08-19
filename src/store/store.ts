import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.ts";

 const store = configureStore({
    reducer:{
        auth:authSlice
    }
})
export default store

