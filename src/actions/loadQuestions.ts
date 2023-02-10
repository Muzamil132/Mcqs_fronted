import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Option, QuestType } from "./addQuestion"

export interface QuestionListStateType {
    count:number,
    status:"idle"| "loading",
    error:Error | null,
    questionList:QuestType[] 

}

const transFormQuestion=(questionList:any)=>{
    
    const newList= questionList.map((item:any)=>{
        return {
          answer:item.answer,
          category:item.category,
          id:item._id,
          question:item.question,
          answerGiven:false,
          options:item.options.map((x:Option)=>({optionSelected:false,optionvalue:x,correct:false}))
    
        }
    
      })
    
      return newList
    
    
    
    }



export const loadQuestionByCategory = createAsyncThunk<QuestionListStateType,any>("questions/add",async (values:any,thunkApi)=>{
    console.log(values)
   
 try{
    const response = await axios.get(`http://localhost:4000/questions/all?cate=${values.questionType}&page=${values.page}`)

   
    console.log(response.data.questions,"finest here is it")

    return {
        count:response.data.count,
        status:"idle",
        error:null,
        questionList:transFormQuestion(response.data.questions)
    }

 }catch(error:any){
     console.log(error.response.data)
    return thunkApi.rejectWithValue(error.response.data)
   

 }

})