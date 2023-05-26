import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from './countries-selectors'
import { RootState, useAppDispatch } from '../../store'
import { selectControls } from '../controls/controls-selector'
import { fetchAllCountries } from './asyncCountriesActions'

export const useCountries = () => {
  const dispatch = useAppDispatch()
  const controls = useSelector(selectControls)

  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, controls)
  )
  const { status, error, qty } = useSelector(selectCountriesInfo)

  useEffect(() => {
    if (!qty) dispatch(fetchAllCountries())
  }, [qty, dispatch])

  return { countries, status, error, qty }
}
