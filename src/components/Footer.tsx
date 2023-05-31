import styled from 'styled-components'

const gitHub = 'https://github.com/Hornetos21'
const urlChallenge =
  'https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca'

const Attribution = styled.footer`
  font-size: var(--fs-md);
  color: var(--colors-text);
  text-align: center;
  position: absolute;
  height: 2.2rem;
  bottom: 0;
  left: 0;
  right: 0;

  & a {
    color: grey;
    text-decoration: none;
  }
`

const Footer = () => {
  return (
    <Attribution>
      Challenge by{' '}
      <a href={urlChallenge} target="_blank" rel="noreferrer">
        Frontend Mentor
      </a>
      . Coded by <a href={gitHub}>Igor Shapovalov</a>.
    </Attribution>
  )
}

export default Footer
