import { useDispatch, useSelector } from 'react-redux'
import {
  clearDetails,
  loadCountryByName,
  selectDetails,
} from './details-slice.js'
import { useEffect } from 'react'

export const useDetails = (name) => {
  const dispatch = useDispatch()

  const details = useSelector(selectDetails)

  useEffect(() => {
    dispatch(loadCountryByName(name))

    return () => dispatch(clearDetails())
  }, [dispatch, name])

  return details
}
