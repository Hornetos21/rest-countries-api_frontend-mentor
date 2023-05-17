import { SET_THEME } from './theme-actions.js'

export const themeReducer = (state = 'light', action) => {
  if (action.type === SET_THEME) return action.payload
  return state
}
