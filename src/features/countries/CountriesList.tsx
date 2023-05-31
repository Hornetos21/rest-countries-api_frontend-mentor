import { useMemo } from 'react'

import { List } from '../../components/List'
import { Card } from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { selectControls } from '../controls/controls-selector'

import { useAppSelector } from '../../store'
import { useGetAllCountiesQuery } from '../../services/api'

const CountriesList = () => {
  const navigate = useNavigate()
  const { search = '', region = '' } = useAppSelector(selectControls)
  const {
    data: countries = [],
    isSuccess,
    isLoading,
    isError,
  } = useGetAllCountiesQuery()
  const visibleCountries = useMemo(() => {
    return countries
      .filter(
        (country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase()) &&
          country.region.includes(region)
      )
      .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
  }, [search, countries, region])
  /*const visibleCountries = countries
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        country.region.includes(region)
    )
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))*/

  return (
    <>
      {isError && <h2>Can't fetch data </h2>}
      {isLoading && <Spinner />}
      {isSuccess && (
        <List>
          {visibleCountries.map((c) => {
            const countryInfo = {
              img: c.flags.svg,
              name: c.name.common,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital.join(', '),
                },
              ],
            }

            return (
              <Card
                key={c.name.common}
                onClick={() => navigate(`/country/${c.name.common}`)}
                {...countryInfo}
              />
            )
          })}
        </List>
      )}
    </>
  )
}

export default CountriesList
