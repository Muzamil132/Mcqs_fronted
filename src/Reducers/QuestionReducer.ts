

import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from '@reduxjs/toolkit'
import { addQuestion, AddQuestionStateType } from "../actions/addQuestion";


interface drawerStateType {
  open:boolean
}

const initialState:AddQuestionStateType={
    success:false,
    status:"idle",
    error:null
  
};

export const QuestionState = createSlice({
  name:"questionState",
  initialState,
  reducers:{
    reset:(state)=>{
      return initialState
    }
   
    


  },
  extraReducers:(builders)=>{
    builders.addCase(addQuestion.pending,(state)=>{
       state.status="loading"

    })

    builders.addCase(addQuestion.fulfilled,(state,{payload})=>{
       
        if(payload.success){
           state.status="idle"
            state.success=payload.success
            state.error=null
        
        }else{
            state.success=false
            state.error=payload.error


        }

 
     })

     builders.addCase(addQuestion.rejected,(state,{payload}:any)=>{
        state.status="idle"
        if(payload){
            state.error=payload.error
        }

 
     })


  }

})

export default QuestionState.reducer
export const {reset}= QuestionState.actions
// export const {toggleDrawer} = QuestionState.actions 
