const BASE_URL = 'https://restcountries.com/v3.1/'
const filtersCounties = 'all?fields=name,capital,flags,population,region'
const filtersByName =
  'fields=name,tld,currencies,capital,region,subregion,languages,population,flags,borders;fullText=true'
export const ALL_COUNTRIES = BASE_URL + filtersCounties

export const searchByCountry = (name: string) =>
  `${BASE_URL}name/${name}?${filtersByName}`

export const filterByCode = (codes: string[]) =>
  `${BASE_URL}alpha?codes=${codes.join(',')};fields=name`
