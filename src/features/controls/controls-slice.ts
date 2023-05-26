import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Region } from 'types'

type ControlsSlice = {
  search: string
  region: Region | ''
}

const initialState: ControlsSlice = {
  search: '',
  region: '',
}

const controlsSlice = createSlice({
  name: '@@controls',
  initialState: initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setRegion: (state, action: PayloadAction<Region | ''>) => {
      state.region = action.payload
    },
    clearControls: () => initialState,
  },
})
export const { setSearch, clearControls, setRegion } = controlsSlice.actions
export const controlsReducer = controlsSlice.reducer
