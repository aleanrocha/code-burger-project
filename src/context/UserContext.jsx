import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  const putUserData = (data) => {
    setUserData((prevUserData) => {
      const newData = { ...prevUserData, ...data }
      return localStorage.setItem('clientData', JSON.stringify(newData))
    })
  }

  const logout = async () => {
    await localStorage.removeItem('clientData')
  }

  useEffect(() => {
    const loadClientData = async () => {
      const clientDataString = await localStorage.getItem('clientData')
      if (clientDataString) {
        setUserData(JSON.parse(clientDataString))
      }
    }
    loadClientData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}
