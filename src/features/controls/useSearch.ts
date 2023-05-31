import { setSearch } from './controls-slice'
import { selectSearch } from './controls-selector'
import { ChangeEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'

export type onSearch = ChangeEventHandler<HTMLInputElement>
export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch()
  const search = useAppSelector(selectSearch)
  const handleSearch: onSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return [search, handleSearch]
}
