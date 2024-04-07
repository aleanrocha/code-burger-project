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

  const deleteProduct = async (productId) => {
    const newCart = cartData.filter((product) => product.id !== productId)
    setCartData(newCart)
    await localStorage.setItem('cartData', JSON.stringify(newCart))
  }

  const increaseCartData = async (producdId) => {
    const newCart = cartData.map((product) => {
      return product.id === producdId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartData(newCart)
    await localStorage.setItem('cartData', JSON.stringify(newCart))
  }

  const decreaseCartData = async (productId) => {
    const indexProduct = cartData.findIndex(
      (product) => product.id === productId
    )

    if (cartData[indexProduct].quantity > 1) {
      const newCart = cartData.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartData(newCart)
      await localStorage.setItem('cartData', JSON.stringify(newCart))
    } else {
      deleteProduct(productId)
    }
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
    <CartContext.Provider
      value={{ putCartData, increaseCartData, decreaseCartData, cartData }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node
}
