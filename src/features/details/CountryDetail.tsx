import { Info } from './Info'
import { NavigateFunction } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { useGetCountryByNameQuery } from '../../services/api'

interface Props {
  name?: string
  navigate: NavigateFunction
}

const CountryDetail = ({ name = '', navigate }: Props) => {
  const { isError, isFetching, currentData } = useGetCountryByNameQuery(name)

  if (isError) return <h2>Can not fetch country</h2>

  if (isFetching && !currentData) return <Spinner />

  return <>{currentData && <Info push={navigate} {...currentData['0']} />}</>
}

export default CountryDetail
