import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, loadUser } from "../actions/user";
import { initialState } from "./user";


export const loadedUserState = createSlice({
    name: "user",
    initialState,
   

    reducers: {
      logoutUser:()=>{
        localStorage.removeItem("user")
        return initialState

      }
      
    },


  
    
    extraReducers: (builder) => {

      
  
      // When we send a request,
      // `fetchTodos.pending` is being fired:
      builder.addCase(getUserProfile.pending, (state) => {
        // At that moment,
        // we change status to `loading` 
        // and clear all the previous errors:
        state.status = "loading";
        
      });
  
      // When a server responses with the data,
      // `fetchTodos.fulfilled` is fired:
      builder.addCase(getUserProfile.fulfilled, 
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
      builder.addCase(getUserProfile.rejected, 
        (state, { payload }) => {
            console.log(payload,"ok error")
        // We show the error message
        // and change `status` back to `idle` again.
        if (payload) state.error = {message:"Error happend"};
        state.status = "idle";
      });

     
    },
  });

  export default loadedUserState.reducer;
  export const {logoutUser}=loadedUserState.actions