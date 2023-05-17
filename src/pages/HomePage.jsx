import { useNavigate } from 'react-router-dom'
import { Controls } from '../components/Controls.jsx'
import { List } from '../components/List.jsx'
import { Card } from '../components/Card.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from '../store/countries/countries-selectors.js'
import { useEffect } from 'react'
import { loadCountries } from '../store/countries/countries-actions.js'
import { selectControls } from '../store/controls/controls-selectors.js'
import throttle from 'lodash.throttle'

const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { search, region } = useSelector(selectControls)

  const countries = useSelector(
    throttle((state) => selectVisibleCountries(state, { search, region }), 300)
  )
  const { status, error, qty } = useSelector(selectCountriesInfo)

  useEffect(() => {
    if (!qty) dispatch(loadCountries())
  }, [qty, dispatch])

  return (
    <>
      <Controls />
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

export default HomePage
