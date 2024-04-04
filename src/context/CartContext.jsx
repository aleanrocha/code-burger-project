import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([])

  const putCartData = async (productData) => {
    const productIndex = cartData.findIndex((prd) => prd.id === productData.id)

    let newCartData = []

    if (productIndex >= 0) {
      newCartData = cartData
      newCartData[productIndex].quantity++
      setCartData(newCartData)
    } else {
      productData.quantity = 1
      newCartData = [...cartData, productData]
      setCartData(newCartData)
    }
    await localStorage.setItem('cartData', JSON.stringify(newCartData))
  }

  useEffect(() => {
    const loadCartData = async () => {
      const cartDataString = await localStorage.getItem('cartData')
      if (cartDataString) {
        setCartData(JSON.parse(cartDataString))
      }
    }
    loadCartData()
  }, [])

  return (
    <CartContext.Provider value={{ putCartData }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node
}
