import { useContext } from 'react'

import { UserContext } from '../context/UserContext'

const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }
  return context
}

export default useUser
