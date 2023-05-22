import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name))
  }
)

export const loadNeighborsByBorder = createAsyncThunk(
  '@@details/load-country-by-borders',
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders))
  }
)

const initialState = {
  status: 'idle',
  error: null,
  currentCountry: null,
  neighbors: [],
}

const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload || action.meta.error
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = 'idle'
        state.currentCountry = action.payload.data[0]
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.data.map((country) => country.name)
      })
  },
})
export const { clearDetails } = detailsSlice.actions
export const detailsReducer = detailsSlice.reducer

export const selectCurrentCountry = (state) => state.details.currentCountry
export const selectDetails = (state) => state.details
export const selectNeighbors = (state) => state.details.neighbors
