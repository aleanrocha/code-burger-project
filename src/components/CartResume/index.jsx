import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import useCart from '../../hooks/useCart'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import Button from '../Button'
import { CartResumeContainer, ContainerItems } from './styles'

const CartResume = () => {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax, setDeliveryTax] = useState(0)

  const { cartData } = useCart()

  const submitOrder = async () => {
    const order = cartData.map((product) => {
      return { id: product.id, quantity: product.quantity }
    })
    await toast.promise(api.post('/orders', { products: order }), {
      pending: 'Realizando pedido...',
      success: 'Pedido realizado!',
      error: 'Erro ao fazer pedido!'
    })
  }

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
      <Button text={'Finalizar pedido'} click={submitOrder} />
      <ToastContainer autoClose={1000} />
    </CartResumeContainer>
  )
}

export default CartResume
