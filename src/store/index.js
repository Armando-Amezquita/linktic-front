import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer  from "../reducers/Auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSliceReducer
    }
});

