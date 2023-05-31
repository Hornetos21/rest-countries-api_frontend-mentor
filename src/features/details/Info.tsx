import { Country } from 'types'
import { NavigateFunction } from 'react-router-dom'
import { useGetCountriesByCodeQuery } from '../../services/api'

import {
  InfoContainer,
  InfoImage,
  InfoTitle,
  List,
  ListGroup,
  ListItem,
  Meta,
  Tag,
  TagGroup,
  Wrapper,
} from './Info.styles'

interface Props extends Country {
  push: NavigateFunction
}
export const Info = (props: Props) => {
  const arrNativeName = Object.entries(props.name.nativeName)
  const nativeName = arrNativeName.length ? arrNativeName[0][1].common : ''
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

  const { data: neighbors = [] } = useGetCountriesByCodeQuery(borders, {
    skip: !borders.length,
  })

  return (
    <Wrapper>
      <InfoImage src={flags.svg} alt={flags.alt} />
      <InfoContainer>
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
                  key={countryName.name.common}
                  onClick={() => push(`/country/${countryName.name.common}`)}
                >
                  {countryName.name.common}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </InfoContainer>
    </Wrapper>
  )
}
