import { Info } from './Info'
import { useDetails } from './useDetails'
import { NavigateFunction } from 'react-router-dom'
import Spinner from '../../components/Spinner'

interface Props {
  name?: string
  navigate: NavigateFunction
}
const CountryDetail = ({ name = '', navigate }: Props) => {
  const { currentCountry, error, status } = useDetails(name)

  return (
    <>
      {status === 'loading' && <Spinner />}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  )
}

export default CountryDetail
