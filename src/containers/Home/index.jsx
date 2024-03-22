import banner from '../../assets/banner-burger-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { BannerContainer, BannerImage } from './styles'

const Home = () => {
  return (
    <>
      <BannerContainer>
        <BannerImage src={banner} alt="Image de um hamburger" />
      </BannerContainer>
      <CategoryCarousel />
    </>
  )
}

export default Home
