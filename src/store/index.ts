import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import globalReducer from "./reducers/globalReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

export const store =  configureStore({
    reducer:{
        userReducer,
        globalReducer,
        productReducer,
        cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;