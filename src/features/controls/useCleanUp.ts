import { clearControls } from './controls-slice'
import { useAppDispatch } from '../../store'

export const useCleanUp = () => {
  const dispatch = useAppDispatch()

  return () => dispatch(clearControls())
}
