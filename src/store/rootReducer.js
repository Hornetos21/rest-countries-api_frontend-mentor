import { combineReducers } from 'redux'
import { themeReducer } from './theme/theme-reducer.js'
import { countriesReducer } from './countries/countries-reducer.js'
import { controlsReducer } from './controls/controls-reducer.js'
import { detailsReducer } from './details/details-reducer.js'

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
})
