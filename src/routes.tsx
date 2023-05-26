import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import { Details } from './pages/Details.js'
import { NotFound } from './pages/NotFound.js'
import Layout from './pages/Layout.js'

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
