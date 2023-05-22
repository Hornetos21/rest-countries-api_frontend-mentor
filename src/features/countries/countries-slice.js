import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadCountries = createAsyncThunk(
  '@@countries/load-countries',
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES)
  }
)

const initialState = {
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
      .addCase(loadCountries.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload || action.meta.error
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = action.payload.data
      })
  },
})

export const countriesReducer = countriesSlice.reducer

export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
})
export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  )
}
