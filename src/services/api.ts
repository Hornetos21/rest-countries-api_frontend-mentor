import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Country } from '../types'

const filterAllCountries = '?fields=name,capital,flags,population,region'
const filtersByName =
  '?fields=name,tld,currencies,capital,region,subregion,languages,population,flags,borders;fullText=true'
export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (build) => ({
    getAllCounties: build.query<Country[], string>({
      query: () => `all${filterAllCountries}`,
    }),
    getCountryByName: build.query<Country, string>({
      query: (name) => `name/${name}${filtersByName}`,
    }),
    getCountriesByCode: build.query<Country, string[]>({
      query: (codes) => `alpha?codes=${codes.join(',')};fields=name`,
    }),
  }),
})

export const {
  useGetAllCountiesQuery,
  useGetCountryByNameQuery,
  useGetCountriesByCodeQuery,
} = countriesApi
