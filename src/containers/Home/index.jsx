import banner from '../../assets/banner-burger-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { BannerContainer, BannerImage } from './styles'

const Home = () => {
  return (
    <>
      <BannerContainer>
        <BannerImage src={banner} alt="Image de um hamburger" />
      </BannerContainer>
      <CategoryCarousel />
      <OffersCarousel />
    </>
  )
}

export default Home
