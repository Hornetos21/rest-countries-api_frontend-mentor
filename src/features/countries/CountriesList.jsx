import { List } from '../../components/List.jsx'
import { Card } from '../../components/Card.jsx'
import { useNavigate } from 'react-router-dom'
import { useCountries } from './useCountries.js'

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
              img: c.flags.png,
              name: c.name,
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
                  description: c.capital,
                },
              ],
            }

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
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
