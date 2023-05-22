import { Info } from './Info.jsx'
import { useDetails } from './useDetails.js'

const CountryDetail = ({ name = '', navigate }) => {
  const { currentCountry, error, status } = useDetails(name)

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  )
}

export default CountryDetail
