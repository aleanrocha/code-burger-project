import useCart from '../../hooks/useCart'
import formatCurrency from '../../utils/formatCurrency'
import {
  CartItemsContainer,
  Header,
  Body,
  QuantityWrapper,
  ParagraphWrapper,
  Image
} from './styles'

const CartItens = () => {
  const { increaseCartData, decreaseCartData, cartData } = useCart()

  return (
    <CartItemsContainer>
      <Header>
        <ParagraphWrapper className="itemCol2">Itens</ParagraphWrapper>
        <ParagraphWrapper>Preço</ParagraphWrapper>
        <ParagraphWrapper>Quantidade</ParagraphWrapper>
        <ParagraphWrapper>Total</ParagraphWrapper>
      </Header>
      {cartData && cartData.length > 0 ? (
        cartData.map((product) => (
          <Body key={product.id}>
            <Image src={product.url} alt="comida deliciosa" />
            <ParagraphWrapper>{product.name}</ParagraphWrapper>
            <ParagraphWrapper>{formatCurrency(product.price)}</ParagraphWrapper>
            <QuantityWrapper>
              <button onClick={() => decreaseCartData(product.id)}>-</button>
              <ParagraphWrapper>{product.quantity}</ParagraphWrapper>
              <button onClick={() => increaseCartData(product.id)}>+</button>
            </QuantityWrapper>
            <ParagraphWrapper>
              {formatCurrency(product.price * product.quantity)}
            </ParagraphWrapper>
          </Body>
        ))
      ) : (
        <ParagraphWrapper className="emptyCart">
          O carrinho está vazio!
        </ParagraphWrapper>
      )}
    </CartItemsContainer>
  )
}

export default CartItens
