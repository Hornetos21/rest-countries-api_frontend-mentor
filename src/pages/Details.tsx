import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { Button } from '../components/Button'
import CountryDetail from '../features/details/CountryDetail'

export const Details = () => {
  const navigate = useNavigate()
  const { name } = useParams()

  return (
    <div style={{ padding: '17px 12px' }}>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetail name={name} navigate={navigate} />
    </div>
  )
}
