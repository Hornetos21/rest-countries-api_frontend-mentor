import styled from 'styled-components'
import { Container } from './Container'
import { ReactNode } from 'react'

const Wrapper = styled.main`
  padding: 1.4rem 0 5rem;

  @media (min-width: 767px) {
    padding: 3.4rem 0 5rem;
  }
`
type Props = {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
