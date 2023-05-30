import styled from 'styled-components'
import { ReactNode } from 'react'

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 2.5rem;

  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, minmax(255px, 263px));
  gap: 2.3rem;

  @media (min-width: 767px) {
    gap: 3rem;
    padding: 3rem 0;
  }

  @media (min-width: 1024px) {
    gap: 4.7rem;
  }
`
type Props = {
  children: ReactNode
}
export const List = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}
