import {createSlice} from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload; //user updated with the payload passed in
        },
        logout:(state)=>{
          state.user=null;
        }
    }
});

export const {login, logout}=userSlice.actions;  //exporting actions

export const selectUser=(state)=>state.user.user;     //here we access the data from the redux store and here we access it by state.(variable whose state is going to be updated).object of that variable stored

export default userSlice.reducer;
