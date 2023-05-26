import { createAsyncThunk } from '@reduxjs/toolkit'
import { Country, Extra } from '../../types'
import { CountrySlice } from './countries-slice'
import { DetailsSlice } from '../details/details-slice'

export const fetchAllCountries = createAsyncThunk<
  { data: Country[] },
  undefined,
  {
    state: { countries: CountrySlice }
    extra: Extra
    rejectValue: string
  }
>(
  '@@countries/load-countries',
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.ALL_COUNTRIES)
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Unknown error')
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        countries: { status },
      } = getState()

      if (status === 'loading') {
        return false
      }
    },
  }
)

export const fetchCountryByName = createAsyncThunk<
  { data: Country[] },
  string,
  { state: { details: DetailsSlice }; extra: Extra }
>(
  '@@details/load-country-by-name',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name))
  },
  {
    condition: (_, { getState }) => {
      const {
        details: { status },
      } = getState()

      if (status === 'loading') {
        return false
      }
    },
  }
)
