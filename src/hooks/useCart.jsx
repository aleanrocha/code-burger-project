import { useContext } from 'react'

import { CartContext } from '../context/CartContext'

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }
  return context
}

export default useCart
