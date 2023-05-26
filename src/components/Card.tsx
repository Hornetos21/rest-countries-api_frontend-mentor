import styled from 'styled-components'
import { CountryInfo } from 'types'

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  height: 335px;
  //max-width: 264px;
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`

const CardBody = styled.div`
  padding: 1.4rem 1.5rem 2rem;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: var(--fw-bold);
`

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.9rem 0 0;
  letter-spacing: -0.4px;
`

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.7;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`

interface Props extends CountryInfo {
  onClick: () => void
}

export const Card = ({ img, name, info = [], onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}
