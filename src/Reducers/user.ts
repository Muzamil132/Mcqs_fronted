import { createSlice } from "@reduxjs/toolkit";
import { loadUser } from "../actions/user";

export interface User{
    name:string,
    email:string,
    id:string,
    token:string

}
interface Error {
    message:string
}

export interface UserState {
    status: "loading" | "idle";
    
   
    error: Error | null;
    user:User | null
}

export const initialState:UserState={
    status:'idle',
    error:null,
    user:localStorage.getItem("user") && JSON.parse(localStorage.getItem("user") || "")
}



// export const userSlice = createSlice({
//     name: "user",
//     initialState,
   

//     reducers: {
//       // ...
//     },
  
//     // In `extraReducers` we declare 
//     // all the actions:
//     extraReducers: (builder) => {
  
//       // When we send a request,
//       // `fetchTodos.pending` is being fired:
//       builder.addCase(loadUser.pending, (state) => {
//         // At that moment,
//         // we change status to `loading` 
//         // and clear all the previous errors:
//         state.status = "loading";
        
//       });
  
//       // When a server responses with the data,
//       // `fetchTodos.fulfilled` is fired:
//       builder.addCase(loadUser.fulfilled, 
//         (state, { payload }) => {
//         console.log(payload,"I am Here")
//         state.status="idle"
//         if(payload.user!=null){
//             state.error=null
//             state.user=payload.user
//         }else{
//         state.user=null
//         state.error=payload.error

//         }
//       });
  
//       // When a server responses with an error:
//       builder.addCase(loadUser.rejected, 
//         (state, { payload }) => {
//             console.log(payload,"ok error")
//         // We show the error message
//         // and change `status` back to `idle` again.
//         if (payload) state.error = {message:"Error happend"};
//         state.status = "idle";
//       });
//     },
//   });

//   export default userSlice.reducer;
