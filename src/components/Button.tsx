import styled from 'styled-components'

export const Button = styled.button`
  padding: 0 1.55rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  border-radius: var(--radii);
  height: 32px;

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: rgba(180, 180, 180, 0.76);
  }

  @media (min-width: 767px) {
    width: 135px;
    padding: 0 1.9rem;
    height: 40px;
    font-size: 14px;
  }
`
