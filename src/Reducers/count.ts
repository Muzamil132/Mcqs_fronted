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
    toggleDrawer:(state,action)=>{
      console.log(action)
        state.open=true
    },
   
    


  }

})

export default DrawerState.reducer

export const {toggleDrawer} = DrawerState.actions







  