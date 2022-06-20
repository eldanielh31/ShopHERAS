import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser : null,
        isFetching:false,
        error: false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching=false;
            state.currentUser= action.payload;
            state.error=false;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        //DELETE
        deleteUserStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        deleteUserSuccess: (state, action)=>{
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((item)=> item._id === action.payload),
                1
            );
        },
        deleteCurrentUserSuccess: (state)=>{
            state.isFetching = false;
            state.currentUser = null;
        },
        deleteUserFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {loginStart, loginSuccess, loginFailure,
    deleteCurrentUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess} = userSlice.actions;
export default userSlice.reducer;