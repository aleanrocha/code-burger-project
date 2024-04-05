import useCart from '../../hooks/useCart'
import formatCurrency from '../../utils/formatCurrency'
import {
  CartItemsContainer,
  Header,
  Body,
  ParagraphWrapper,
  Image
} from './styles'

const CartItens = () => {
  const { cartData } = useCart()
  return (
    <CartItemsContainer>
      <Header>
        <ParagraphWrapper>Itens</ParagraphWrapper>
        <ParagraphWrapper>Preço</ParagraphWrapper>
        <ParagraphWrapper>Quantidade</ParagraphWrapper>
        <ParagraphWrapper>Total</ParagraphWrapper>
      </Header>
      {cartData &&
        cartData.map((product) => (
          <Body key={product.id}>
            <Image src={product.url} alt="comida deliciosa" />
            <ParagraphWrapper>{product.name}</ParagraphWrapper>
            <ParagraphWrapper>{formatCurrency(product.price)}</ParagraphWrapper>
            <ParagraphWrapper>{product.quantity}</ParagraphWrapper>
            <ParagraphWrapper>
              {formatCurrency(product.price * product.quantity)}
            </ParagraphWrapper>
          </Body>
        ))}
    </CartItemsContainer>
  )
}

export default CartItens
