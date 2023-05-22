import { useDispatch, useSelector } from 'react-redux'
import { selectControls } from '../controls/controls-slice.js'
import throttle from 'lodash.throttle'
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from './countries-slice.js'
import { useEffect } from 'react'

export const useCountries = () => {
  const dispatch = useDispatch()
  const controls = useSelector(selectControls)

  const countries = useSelector(
    throttle((state) => selectVisibleCountries(state, controls), 300)
  )
  const { status, error, qty } = useSelector(selectCountriesInfo)

  useEffect(() => {
    if (!qty) dispatch(loadCountries())
  }, [qty, dispatch])

  return { countries, status, error }
}
