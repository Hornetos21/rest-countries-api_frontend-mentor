import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  place-content: center;
  font-size: 18px;
  font-weight: 600;
`
const NotFound = () => {
  return (
    <Wrapper>
      <div>This page doesn't exist</div>
    </Wrapper>
  )
}
export default NotFound
