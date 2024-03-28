import { useEffect, useState, useRef } from 'react'
import { register } from 'swiper/element/bundle'

import api from '../../services/api'
import Button from '../Button'
import { CategoryContainer, CategoryTitle, SlideContent, Image } from './styles'

register()

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([])
  const [slidePerView, setSlidePerView] = useState()
  const swiperRef = useRef(null)

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      setCategories(data)
    }
    loadCategories()
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
    <CategoryContainer>
      <CategoryTitle>Categorias</CategoryTitle>
      <swiper-container
        slides-per-view={slidePerView}
        pagination="true"
        space-between="10"
        ref={swiperRef}
        init="false"
      >
        {categories.map((category) => (
          <swiper-slide key={category.id}>
            <SlideContent>
              <Image src={category.url} alt="comida deliciosa" />
              <Button text={category.name} />
            </SlideContent>
          </swiper-slide>
        ))}
      </swiper-container>
    </CategoryContainer>
  )
}

export default CategoryCarousel
