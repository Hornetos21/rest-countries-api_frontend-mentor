import { Header } from '../components/Header.jsx'
import { Main } from '../components/Main.jsx'
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
