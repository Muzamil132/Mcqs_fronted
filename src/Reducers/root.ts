import { combineReducers } from '@reduxjs/toolkit'
import DrawerState  from './count'
import LoadQuestionReducer from './LoadQuestionReducer'
import QuestionReducer from './QuestionReducer'

// import countReducer from './count'
// import userReducer from '../Reducers/user'
import registerState from './registerState'
// import loadedUserState  from './loadUser'


export const rootReducer = combineReducers({
  registerUser:registerState,
  drawerState:DrawerState,
  addquest:QuestionReducer,
  questionByCategory:LoadQuestionReducer
})


