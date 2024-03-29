import { createBrowserRouter } from 'react-router-dom'

import Home from '../containers/Home'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
import ProtectedRoute from './protected-routes'

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      },
      {
        path: '/produtos',
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        )
      }
    ]
  },
  { path: '/entrar', element: <Login /> },
  { path: '/cadastrar', element: <Register /> }
])

export default Router
