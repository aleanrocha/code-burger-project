import banner from '../../assets/banner-burger-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import {
  HomeContainer,
  BannerContainer,
  BannerImage,
  CarrouselContainer
} from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerImage src={banner} alt="Image de um hamburger" />
      </BannerContainer>
      <CarrouselContainer>
        <CategoryCarousel />
        <OffersCarousel />
      </CarrouselContainer>
    </HomeContainer>
  )
}

export default Home
