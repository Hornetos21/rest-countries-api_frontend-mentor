import { useSelector } from 'react-redux'
import { loadNeighborsByBorder } from './details-slice'
import { useEffect } from 'react'
import { selectNeighbors } from './details-selector'
import { useAppDispatch } from '../../store'

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch()
  const neighbors = useSelector(selectNeighbors)

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders))
    }
  }, [borders, dispatch])

  return neighbors
}
