import { createBrowserRouter } from 'react-router-dom'

import paths from '../constants/paths'
import Admin from '../containers/Admin'
import Cart from '../containers/Cart'
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
        path: paths.Home,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      },
      {
        path: paths.Products,
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        )
      },
      {
        path: paths.Cart,
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      },
      {
        path: paths.AdPanel,
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        )
      },
      {
        path: paths.ListProducts,
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        )
      },
      {
        path: paths.EditProduct,
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        )
      },
      {
        path: paths.NewProduct,
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        )
      }
    ]
  },
  { path: paths.Login, element: <Login /> },
  { path: paths.Register, element: <Register /> }
])

export default Router
