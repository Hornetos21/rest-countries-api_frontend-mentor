import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { Button } from '../components/Button'
import CountryDetail from '../features/details/CountryDetail.jsx'

export const Details = () => {
  const navigate = useNavigate()
  const { name } = useParams()

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetail name={name} navigate={navigate} />
    </div>
  )
}
