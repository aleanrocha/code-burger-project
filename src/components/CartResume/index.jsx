import { useEffect, useState } from 'react'

import useCart from '../../hooks/useCart'
import formatCurrency from '../../utils/formatCurrency'
import Button from '../Button'
import { CartResumeContainer, ContainerItems } from './styles'

const CartResume = () => {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax, setDeliveryTax] = useState(0)

  const { cartData } = useCart()

  useEffect(() => {
    const sumAllItems = cartData.reduce((acc, cur) => {
      return cur.price * cur.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
    setDeliveryTax((sumAllItems * 5) / 100)
  }, [cartData, deliveryTax])

  return (
    <CartResumeContainer>
      <ContainerItems>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="tax">Taxa de entrega</p>
          <p className="tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p className="total">Total do pedido</p>
          <p className="total-price">
            {formatCurrency(finalPrice + deliveryTax)}
          </p>
        </div>
      </ContainerItems>
      <Button text={'Finalizar pedido'} />
    </CartResumeContainer>
  )
}

export default CartResume
