import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Option, QuestType } from "../actions/addQuestion";
import { loadQuestionByCategory, QuestionListStateType } from "../actions/loadQuestions";
// import { QuestType } from "../actions/addQuestion";
const initialState:QuestionListStateType={
    questionList:[],
    status:"idle",
    error:null,
    count:0,
  
};



export const loadQuestionState = createSlice({
  name:"question",
  initialState,
  reducers:{
    

    checkAnswer:(state:any,action:PayloadAction<{id:string,givenAnswer:string}>)=>{
        console.log(action)
    const targetedQuestionIndex= state.questionList.findIndex((item:QuestType)=>item.id===action.payload.id)
    console.log(targetedQuestionIndex)
    const targetedQuestion= state.questionList[targetedQuestionIndex]
    targetedQuestion.answerGiven=true
    const targetedOptionIndex = targetedQuestion.options.findIndex((option:Option)=>option.optionvalue===action.payload.givenAnswer)
   
    const targetedOption= targetedQuestion.options[targetedOptionIndex]
    
    if(targetedQuestion.answer===action.payload.givenAnswer){
        
        targetedOption.optionSelected=true
        targetedOption.correct=true
    }
     
    targetedOption.optionSelected=true


  

  }
   
    


  },
  extraReducers:(builders)=>{
    builders.addCase(loadQuestionByCategory.pending,(state)=>{
       state.status="loading"

    })

    builders.addCase(loadQuestionByCategory.fulfilled,(state,{payload})=>{
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

     builders.addCase(loadQuestionByCategory.rejected,(state,{payload}:any)=>{
        state.status="idle"
        if(payload){
            state.error=payload.error
        }

 
     })


  }

})

export default loadQuestionState.reducer

export const {checkAnswer}= loadQuestionState.actions 
