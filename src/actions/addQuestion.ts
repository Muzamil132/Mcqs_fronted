import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Option{
    optionSelected:boolean,
    optionvalue:string,
    correct:false

}

export interface QuestType {
    id:string,
    answerGiven:boolean,
    question:string,
    options:Option[],
    answer:string,
    category:string,
    createdBy:string
}

export interface AddQuestionStateType{
    status:"loading" | "idle",
    error:Error | null,
    success:boolean

}
  







export const addQuestion = createAsyncThunk<AddQuestionStateType,any>("questions/add",async (question:any,thunkApi)=>{
    // console.log(question)
 try{
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/questions/add`,question,{
        headers:{

            "Content-Type": "application/json",
        }
    })

   
    console.log(response.data)
    return {
        status:"idle",
        error:null,
        success:response.data.success
    }

 }catch(error:any){
     console.log(error.response.data)
    return thunkApi.rejectWithValue(error.response.data)
   

 }





})