import { combineReducers } from 'redux'
import { themeReducer } from './theme/theme-reducer.js'

export const rootReducer = combineReducers({
  theme: themeReducer,
})
