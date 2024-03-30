import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { AppProvider } from './context'
import Router from './router/router'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppProvider>
      <RouterProvider router={Router} />
    </AppProvider>
  </React.StrictMode>
)
