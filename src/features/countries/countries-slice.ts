import { createSlice } from '@reduxjs/toolkit'
import { Country, Status } from 'types'
import { fetchAllCountries } from './asyncCountriesActions'

export type CountrySlice = {
  status: Status
  error: null | string
  list: Country[]
}

const initialState: CountrySlice = {
  status: 'idle',
  error: null,
  list: [],
}

const countriesSlice = createSlice({
  name: '@@countries',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAllCountries.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload || 'Cannot load data'
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = action.payload.data
      })
  },
})

export const countriesReducer = countriesSlice.reducer
