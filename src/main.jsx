import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { UserProvider } from './context/UserContext'
import Router from './router'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <UserProvider>
      <RouterProvider router={Router} />
    </UserProvider>
  </React.StrictMode>
)
