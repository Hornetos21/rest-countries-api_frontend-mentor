import { createBrowserRouter } from 'react-router-dom'
// import HomePage from './pages/HomePage.js'
// import { Details } from './pages/Details.js'
// import { NotFound } from './pages/NotFound.js'
import Layout from './pages/Layout.js'
import { lazy, Suspense } from 'react'
import Spinner from './components/Spinner'

const NotFound = lazy(() => import('./pages/NotFound.js'))
const Details = lazy(() => import('./pages/Details.js'))
const HomePage = lazy(() => import('./pages/HomePage.js'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/country/:name',
        element: <Details />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default routes
