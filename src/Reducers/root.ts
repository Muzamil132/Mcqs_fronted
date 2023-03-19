import { combineReducers } from '@reduxjs/toolkit'
import DisAbledQuestionsScreen from '../screens/disAbledQuestionsScreen'
import { Api } from '../services/api'
import DrawerState  from './count'
import disabledQuestionReducer from './disabledQuestionReducer'
import LoadQuestionReducer from './LoadQuestionReducer'
import MyQuestionReducer from './MyQuestionReducer'
import QuestionReducer from './QuestionReducer'

// import countReducer from './count'
// import userReducer from '../Reducers/user'
import registerState from './registerState'
// import loadedUserState  from './loadUser'


export const rootReducer = combineReducers({
  registerUser:registerState,
  drawerState:DrawerState,
  addquest:QuestionReducer,
  questionByCategory:LoadQuestionReducer,
  disabledQuestion:disabledQuestionReducer,
  myQuestion:MyQuestionReducer,
  [Api.reducerPath]:Api.reducer,
})


