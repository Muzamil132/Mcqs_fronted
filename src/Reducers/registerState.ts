import { createSlice } from "@reduxjs/toolkit";
import { fetchWrapper } from "../actions/fetchService";
import { loadUser, registerUser } from "../actions/user";
// import {  UserState } from "./user";
import { initialState } from "./user";



export const registerState = createSlice({
    name: "user",
    initialState,
   

    reducers: {
      logoutUser:(state)=>{
        localStorage.removeItem("user")
        
            state.user=null
      },
     
      
    },
  
    // In `extraReducers` we declare 
    // all the actions:
    extraReducers: (builder) => {
  
      // When we send a request,
      // `fetchTodos.pending` is being fired:
      builder.addCase(registerUser.pending, (state) => {
        // At that moment,
        // we change status to `loading` 
        // and clear all the previous errors:
        state.status = "loading";
        
      });
  
      // When a server responses with the data,
      // `fetchTodos.fulfilled` is fired:
      builder.addCase(registerUser.fulfilled, 
        (state, { payload }) => {
        console.log(payload,"I am Here")
        state.status="idle"
        if(payload.user!=null){
            state.user=payload.user
            state.error=null
        }else{
        state.user=null
        state.error=payload.error

        }

        
       

        
      });
  
      // When a server responses with an error:
      builder.addCase(registerUser.rejected, 
        (state, { payload }) => {
            console.log(payload,"ok error")
        // We show the error message
        // and change `status` back to `idle` again.
        if (payload) state.error = {message:"Error happend"};
        state.status = "idle";
      });
      builder.addCase(loadUser.pending, (state) => {
        // At that moment,
        // we change status to `loading` 
        // and clear all the previous errors:
        state.status = "loading";
        
      });
  

      builder.addCase(loadUser.fulfilled, 
        (state, { payload }) => {
        console.log(payload,"I am Here")
        state.status="idle"
        if(payload.user!=null){
            state.user=payload.user
            state.error=null
        }else{
        state.user=null
        state.error=payload.error

        }

        
       

        
      });
  
      // When a server responses with an error:
      builder.addCase(loadUser.rejected, 
        (state, { payload }) => {
            console.log(payload,"ok error")
        // We show the error message
        // and change `status` back to `idle` again.
        if (payload) state.error = {message:"Error happend"};
        state.status = "idle";
      });
    



    






    },
  });

  export default registerState.reducer;
  export const {logoutUser}=registerState.actions