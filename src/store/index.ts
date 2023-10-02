import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import globalReducer from "./reducers/globalReducer";

export const store =  configureStore({
    reducer:{
        userReducer,
        globalReducer,
        
    },
})

export type RootState = ReturnType<typeof store.getState>;

export default store;