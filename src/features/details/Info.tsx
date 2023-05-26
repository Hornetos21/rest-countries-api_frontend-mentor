import styled from 'styled-components'
import { Country } from 'types'
import { NavigateFunction } from 'react-router-dom'
import { useNeighbors } from './useNeighbors'

const Wrapper = styled.section`
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2.6rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 229px;
`

const InfoTitle = styled.h1`
  font-weight: var(--fw-bold);
  letter-spacing: -1px;
  margin-bottom: 21px;
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  font-size: 14px;
  letter-spacing: -0.3px;
  margin-bottom: 13px;

  & > b {
    font-weight: var(--fw-normal);
  }
`

const Meta = styled.div`
  margin-top: 1.7rem;
  display: flex;
  gap: 1.1rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    letter-spacing: -0.4px;
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 5px 0;
  font-size: 12px;
  background-color: var(--colors-ui-base);
  box-shadow: rgba(149, 157, 165, 0.3) 0 0 4px;
  line-height: 1.5;
  cursor: pointer;
  text-align: center;
  width: 96px;
  border-radius: 2px;
`

interface Props extends Country {
  push: NavigateFunction
}
export const Info = (props: Props) => {
  const nativeName = Object.entries(props.name.nativeName)[0][1].common
  const title = props.name.common
  const languages = Object.values(props.languages)
  const {
    flags,
    capital = [],
    population,
    region,
    subregion,
    tld,
    currencies = {},
    borders = [],
    push,
  } = props
  const neighbors = useNeighbors(borders)

  return (
    <Wrapper>
      <InfoImage src={flags.svg} alt={flags.alt} />

      <div>
        <InfoTitle>{title}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population</b> {population.toLocaleString()}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital.join(', ')}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain:</b>{' '}
              {tld.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currencies: </b>
              {Object.entries(currencies).map((c, i) => (
                <span key={c[0]}>
                  {c[1].name}
                  {i === Object.entries(currencies).length - 1 ? '' : ', '}
                </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages: </b> {<span>{languages.join(', ')}</span>}
              {/*{languages.map((lang, i) => (
                <span key={i}>
                  {lang}
                  {i === languages.length - 1 ? '' : ', '}
                </span>
              ))}*/}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries:</b>
          {!neighbors.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((countryName) => (
                <Tag
                  key={countryName}
                  onClick={() => push(`/country/${countryName}`)}
                >
                  {countryName}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
}
