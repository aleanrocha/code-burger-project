import PropTypes from 'prop-types'

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

  return (
    <Product>
      <ProductImage>
        <Image src={product.url} alt="imagem de comida deliciosa" />
      </ProductImage>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button text={'Adicionar'} click={() => putCartData(product)} />
      </ProductInfo>
    </Product>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
