import PropTypes from 'prop-types'
import { useState } from 'react'

import useCart from '../../hooks/useCart'
import Button from '../Button'
import {
  Product,
  ProductImage,
  ProductInfo,
  Image,
  ProductName,
  ProductPrice
} from './styles'

const CardProduct = ({ product }) => {
  const { putCartData } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  const addedToCartMessage = () => {
    setAddedToCart(true)
    setTimeout(() => {
      setAddedToCart(false)
    }, 800)
  }

  return (
    <Product>
      <ProductImage>
        <Image src={product.url} alt="imagem de comida deliciosa" />
      </ProductImage>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          text={addedToCart ? 'Adicionado' : 'Adicionar'}
          click={() => {
            putCartData(product)
            addedToCartMessage()
          }}
        />
      </ProductInfo>
    </Product>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
