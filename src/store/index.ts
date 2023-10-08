import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import globalReducer from "./reducers/globalReducer";
import productReducer from "./reducers/productReducer";

export const store =  configureStore({
    reducer:{
        userReducer,
        globalReducer,
        productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;