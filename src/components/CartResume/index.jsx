import Button from '../Button'
import { CartResumeContainer, ContainerItems } from './styles'

const CartResume = () => {
  return (
    <CartResumeContainer>
      <ContainerItems>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">R$ 10,00</p>
          <p className="tax">Taxa de entrega</p>
          <p className="tax-price">R$ 10,00</p>
        </div>
        <div className="container-bottom">
          <p className="total">Total do pedido</p>
          <p className="total-price">R$ 20,00</p>
        </div>
      </ContainerItems>
      <Button text={'Finalizar pedido'} />
    </CartResumeContainer>
  )
}

export default CartResume
