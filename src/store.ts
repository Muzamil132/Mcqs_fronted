import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import { rootReducer } from './Reducers/root'

export const store = configureStore({
    reducer: rootReducer
  })

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export type RootState = ReturnType<typeof store.getState>
 