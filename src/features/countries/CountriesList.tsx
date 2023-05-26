import { List } from '../../components/List'
import { Card } from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import { useCountries } from './useCountries'

const CountriesList = () => {
  const navigate = useNavigate()
  const { status, countries, error } = useCountries()

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <List>
          {countries.map((c) => {
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
