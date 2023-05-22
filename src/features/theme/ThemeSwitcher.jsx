import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { useTheme } from './useTheme.js'

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </ModeSwitcher>
  )
}

export default ThemeSwitcher
