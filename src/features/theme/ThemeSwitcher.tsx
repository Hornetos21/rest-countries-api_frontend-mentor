import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { useTheme } from './useTheme'

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: 12px;
  letter-spacing: -0.2px;
  cursor: pointer;
  font-weight: var(--fw-bold);
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
      <span style={{ marginLeft: '0.55rem' }}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </span>
    </ModeSwitcher>
  )
}

export default ThemeSwitcher
