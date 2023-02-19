import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from '@reduxjs/toolkit'


interface drawerStateType {
  open:boolean
}

const initialState:drawerStateType={
  open:false
};

export const DrawerState = createSlice({
  name:"drawer",
  initialState,
  reducers:{
    toggleDrawer:(state)=>{
     if(state.open){
      state.open=false
     }else{
      state.open=true
     }

       
    },
    closeDrawer:(state)=>{
      if(state.open){
        state.open=false
      }

    }
   
    


  }

})

export default DrawerState.reducer

export const {toggleDrawer,closeDrawer} = DrawerState.actions







  