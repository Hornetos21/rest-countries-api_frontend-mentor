import styled from 'styled-components'

export const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  height: 335px;
  transform: scale(1);
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`

export const CardBody = styled.div`
  padding: 1.4rem 1.5rem 2rem;
`

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: var(--fw-bold);
`

export const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.9rem 0 0;
  letter-spacing: -0.4px;
`

export const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.7;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`
