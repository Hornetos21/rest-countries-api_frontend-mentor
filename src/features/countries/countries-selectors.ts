import { RootState } from 'store'

export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
})
export const selectVisibleCountries = (
  state: RootState,
  { search = '', region = '' }
) => {
  return state.countries.list
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        country.region.includes(region)
    )
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
}
export const select8Countries = (state: RootState) => {
  const counter = 8
  const qty = state.countries.list.length
  const arr = []
  for (let i = 0; i < qty / counter; i++) {
    arr.push(state.countries.list[i])
  }

  return arr
}
