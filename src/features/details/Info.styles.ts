import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 320px;
  gap: 2.6rem;
  justify-content: center;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: 1200px) {
    margin-top: 5rem;
    gap: 7.4rem;
    grid-template-columns: minmax(400px, 560px) 1fr;
  }
`

export const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 229px;

  @media (min-width: 1200px) {
    max-height: 400px;
  }
`
export const InfoContainer = styled.div`
  @media (min-width: 1024px) {
    height: 100%;
    padding: 38px 0;
  }
`
export const InfoTitle = styled.h1`
  font-weight: var(--fw-bold);
  letter-spacing: -1px;
  margin-bottom: 21px;

  @media (min-width: 1024px) {
    margin-bottom: 30px;
    font-size: 32px;
  }
`

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 9.4rem;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  font-size: 14px;
  letter-spacing: -0.3px;
  margin-bottom: 13px;

  & > b {
    font-weight: var(--fw-normal);
  }

  @media (min-width: 1024px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`

export const Meta = styled.div`
  margin-top: 1.7rem;
  display: flex;
  gap: 1.1rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    letter-spacing: -0.4px;
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    margin-top: 4rem;
    flex-direction: row;
    align-items: center;
  }
`

export const TagGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  padding: 5px 0;
  font-size: 12px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
  text-align: center;
  width: 96px;
  border-radius: var(--radii);
`
