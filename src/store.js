import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:"root",
    version:1,
    storage
};

const reducer=combineReducers({
    user:userSlice,
})

const persistedReducer=persistReducer(persistConfig,reducer);

export default configureStore({
   reducer:persistedReducer
});