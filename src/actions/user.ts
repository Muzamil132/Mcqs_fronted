import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialState, UserState } from "../Reducers/user";
import { User } from "../Reducers/user";
import axios from "axios";

export const loadUser = createAsyncThunk<UserState,any>("users/fetch", async (data:any,thunkApi)=> {
 
   
  try {
    const response = await axios.post(
      `http://localhost:4000/user/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   localStorage.setItem("user",JSON.stringify(response.data))
    return {
      user:response.data,
      error:null,
      status:"idle"
    }
  } catch (err: any) {
    console.log(err.response.data);
    return   {
      user:null,
      error: err.response.data,
      status:"idle"
    }
   
  }

  // We could also use `as` to coerce its type
  // as in the RTK docs.
});


export const registerUser = createAsyncThunk<UserState,any>("users/register", async (data:any,thunkApi) => {
  console.log(data)

  try {
    const response = await axios.post(
      `http://localhost:4000/user/register`,data

      ,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("user",JSON.stringify(response.data))
   console.log(response.data)
    return {
      user:response.data,
      error:null,
      status:"idle"
    }
  } catch (err: any) {
    console.log(err.response.data);
    return   {
      user:null,
      error: err.response.data,
      status:"idle"
    }
   
  }

 
});


export const getUserProfile = createAsyncThunk<UserState>("users/getUserProfile", async () => {
  console.log(initialState.user?.token,"FROM")

  try {
    const response = await axios.get(
      `http://localhost:4000/user/loaduser`

      ,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${initialState.user?.token}`,

        },
      }
    );
 
   console.log(response.data)
    return {
      user:response.data,
      error:null,
      status:"idle"
    }
  } catch (err: any) {
    console.log(err.response.data);
    return   {
      user:null,
      error: err.response.data,
      status:"idle"
    }
   
  }

 
});