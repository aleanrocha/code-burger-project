import banner from '../../assets/banner-burger-cart.svg'
import CartItens from '../../components/CartItens'
import CartResume from '../../components/CartResume'
import { Container, BannerContainer, BannerImage, Wrapper } from './styles'

const Cart = () => {
  return (
    <Container>
      <BannerContainer>
        <BannerImage src={banner} alt="Image de um hamburger" />
      </BannerContainer>
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}

export default Cart
