import styled from 'styled-components'

import { IoSearch } from 'react-icons/io5'
import { useSearch } from './useSearch'

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1.1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 2.4rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
  @media (min-width: 1024px) {
    width: 480px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 1.6rem;
  font-size: 12px;
  border: none;
  outline: transparent;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
  width: 100%;

  @media (min-width: 767px) {
    font-size: 14px;
  }
`

export const Search = () => {
  const [search, handleSearch] = useSearch()
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleSearch} value={search} />
    </InputContainer>
  )
}
