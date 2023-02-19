import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  loadDisabledQuestion, QuestionListStateType } from "../actions/loadQuestions";

const initialState:QuestionListStateType={
    questionList:[],
    status:"idle",
    error:null,
    count:0,
  
};



export const disabledQuestionsState = createSlice({
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
    deleteFromList:(state,{payload}:any)=>{
        state.questionList= state.questionList.filter(x=>x.id!==payload.id)

    },
    

     

  }

 ,
  
  extraReducers:(builders)=>{
    builders.addCase(loadDisabledQuestion.pending,(state)=>{
       state.status="loading"

    })

    builders.addCase(loadDisabledQuestion.fulfilled,(state,{payload})=>{
        state.status="idle"
        if(payload.questionList){
            state.count=payload.count
            state.questionList=payload.questionList
            state.error=null
        
        }else{
            state.count=payload.count
            state.questionList=payload.questionList
            state.error=payload.error


        }

 
     })

     builders.addCase(loadDisabledQuestion.rejected,(state,{payload}:any)=>{
        console.log(payload,"ok loaded")
        state.status="idle"
        if(payload){
            state.error=payload.error
        }

 
     })


  }

})

export default disabledQuestionsState.reducer
export const {removeFromList,setLoading,stopLoading,deleteFromList}= disabledQuestionsState.actions