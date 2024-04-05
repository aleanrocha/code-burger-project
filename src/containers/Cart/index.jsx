import banner from '../../assets/banner-burger-products.svg'
import CartItens from '../../components/CartItens'
import { Container, BannerContainer, BannerImage } from './styles'

const Cart = () => {
  return (
    <Container>
      <BannerContainer>
        <BannerImage src={banner} alt="Image de um hamburger" />
      </BannerContainer>
      <CartItens />
    </Container>
  )
}

export default Cart
