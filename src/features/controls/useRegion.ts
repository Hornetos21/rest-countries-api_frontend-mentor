import { useSelector } from 'react-redux'
import { setRegion } from './controls-slice'
import { selectRegion } from './controls-selector'
import { useAppDispatch } from '../../store'
import { CountryOption } from './CustomSelect'
import { Region } from 'types'
import { SingleValue } from 'react-select'

type OnSelect = (reg: SingleValue<CountryOption>) => void

export const useRegion = (): [Region | '', OnSelect] => {
  const dispatch = useAppDispatch()
  const region = useSelector(selectRegion)

  const handleSelect: OnSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value))
    } else {
      dispatch(setRegion(''))
    }
  }
  return [region, handleSelect]
}
