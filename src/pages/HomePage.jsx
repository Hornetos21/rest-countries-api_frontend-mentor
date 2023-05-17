import { useNavigate } from 'react-router-dom'
import { Controls } from '../components/Controls.jsx'
import { List } from '../components/List.jsx'
import { Card } from '../components/Card.jsx'

const HomePage = () => {
  const navigate = useNavigate()

  const countries = []

  return (
    <>
      <Controls />

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
    </>
  )
}

export default HomePage
