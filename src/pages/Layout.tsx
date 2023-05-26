import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default Layout
