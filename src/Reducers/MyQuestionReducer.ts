import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { QuestionListStateType } from "../actions/loadQuestions";

const initialState:QuestionListStateType={
    questionList:[],
    status:"idle",
    error:null,
    count:0,
  
};



export const MyQuestionState = createSlice({
    name:"question",
    initialState,
    reducers:{
      setLoading:(state)=>{
          state.status="loading"
      },
      stopLoading:(state)=>{
          state.status="idle"
      },
      removeFromList:(state,{payload}:PayloadAction<{id:string}>)=>{
          state.questionList= state.questionList.filter(x=>x.id!==payload.id)
  
      },

      myQuestion:(state,{payload})=>{
        
        state.questionList=payload.questions

      }
    
      
  
       
  
    }
  
   ,
    
    
  
  })
  
  export default MyQuestionState.reducer
  export const {removeFromList,setLoading,stopLoading,myQuestion}= MyQuestionState.actions