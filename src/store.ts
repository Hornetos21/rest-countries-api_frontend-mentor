import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './features/theme/theme-slice'
import { controlsReducer } from './features/controls/controls-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { countriesApi } from './services/api'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
