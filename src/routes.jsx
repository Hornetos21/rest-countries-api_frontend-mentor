import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { Details } from './pages/Details.jsx'
import { NotFound } from './pages/NotFound.jsx'
import Layout from './pages/Layout.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/country/:name',
        element: <Details />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default routes
