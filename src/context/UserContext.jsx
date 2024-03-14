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
    console.log(userData)
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
    <UserContext.Provider value={{ putUserData }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}
