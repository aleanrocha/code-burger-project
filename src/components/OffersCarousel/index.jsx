import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from 'swiper/element/bundle'

import paths from '../../constants/paths'
import useCart from '../../hooks/useCart'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import Button from '../Button'
import {
  OffersContainer,
  OfferTitle,
  SlideContent,
  Image,
  Title,
  Text
} from './styles'

register()

const OffersCarousel = () => {
  const [offers, setOffers] = useState([])
  const [slidePerView, setSlidePerView] = useState()
  const swiperRef = useRef(null)
  const { putCartData } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const loadOffers = async () => {
      const { data } = await api.get('/products')
      const offerProducts = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(offerProducts)
    }
    loadOffers()
  }, [])

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const params = {
      pagination: true,
      injectStyles: [
        `
          .swiper-pagination-bullet{
            background-color: #9758a4;
          }
      `
      ]
    }
    Object.assign(swiperContainer, params)
    swiperContainer.initialize()

    const handleResiize = () => {
      if (window.innerWidth <= 580) {
        setSlidePerView(1)
      } else if (window.innerWidth <= 768) {
        setSlidePerView(2)
      } else if (window.innerWidth <= 992) {
        setSlidePerView(3)
      } else {
        setSlidePerView(4)
      }
    }
    handleResiize()
    window.addEventListener('resize', handleResiize)
    return () => window.removeEventListener('resize', handleResiize)
  }, [])

  return (
    <OffersContainer>
      <OfferTitle>Ofertas</OfferTitle>
      <swiper-container
        slides-per-view={slidePerView}
        pagination="true"
        space-between="10"
        ref={swiperRef}
        init="false"
      >
        {offers.map((offer) => (
          <swiper-slide key={offer.id}>
            <SlideContent>
              <Image src={offer.url} alt="comida deliciosa" />
              <Title>{offer.name}</Title>
              <Text>{offer.formatedPrice}</Text>
              <Button
                text={'Peça agora'}
                click={() => {
                  putCartData(offer)
                  navigate(paths.Cart)
                }}
              />
            </SlideContent>
          </swiper-slide>
        ))}
      </swiper-container>
    </OffersContainer>
  )
}

export default OffersCarousel
