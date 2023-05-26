import styled from 'styled-components'
import { ReactNode } from 'react'

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 2.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px));
  gap: 2.3rem;

  @media (min-width: 767px) {
    //grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    //padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    //grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`
type Props = {
  children: ReactNode
}
export const List = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}
