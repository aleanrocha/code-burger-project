import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  const putUserData = (data) => {
    setUserData(data)
  }
  return (
    <UserContext.Provider value={{ putUserData }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}
