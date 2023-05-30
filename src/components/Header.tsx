import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container } from './Container'
import ThemeSwitcher from '../features/theme/ThemeSwitcher'
import { useCleanUp } from '../features/controls/useCleanUp'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 0;

  @media (min-width: 767px) {
    padding: 1.4rem 0;
  }
`

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);

  @media (min-width: 767px) {
    font-size: 24px;
  }
`

export const Header = () => {
  const cleanUp = useCleanUp()

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where in the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
