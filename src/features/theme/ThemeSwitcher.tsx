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

  @media (min-width: 767px) {
    font-size: 16px;
  }
`

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline className="moon-outline" />
      ) : (
        <IoMoon className="moon" />
      )}{' '}
      <span style={{ marginLeft: '0.55rem' }}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </span>
    </ModeSwitcher>
  )
}

export default ThemeSwitcher
