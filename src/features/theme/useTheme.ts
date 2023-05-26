import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './theme-slice'
import { useEffect } from 'react'
import { selectTheme } from './theme-selector'

export const useTheme = () => {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [dispatch, theme])

  return { theme, toggleTheme }
}
