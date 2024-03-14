import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './containers/Login'
// import Register from './containers/Register'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <UserProvider>
      <Login />
    </UserProvider>
  </React.StrictMode>
)
