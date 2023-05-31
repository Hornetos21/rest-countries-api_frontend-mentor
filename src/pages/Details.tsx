import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { Button } from '../components/Button'
// import CountryDetail from '../features/details/CountryDetail'
import styled from 'styled-components'
import CountryDetail from '../features/details/CountryDetail'

const Wrapper = styled.div`
  padding: 17px 12px;

  @media (min-width: 767px) {
    padding: 28px 0;
  }
`

const Details = () => {
  const navigate = useNavigate()
  const { name } = useParams()

  return (
    <Wrapper>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack className="arrow-back" /> Back
      </Button>
      <CountryDetail name={name} navigate={navigate} />
    </Wrapper>
  )
}
export default Details
