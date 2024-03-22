import { useEffect } from 'react'

import api from '../../services/api'
import { CategoryContainer } from './styles'

const CategoryCarousel = () => {
  useEffect(() => {
    const loadCategories = async () => {
      const res = await api.get('/categories')
      return res
    }
    console.log(loadCategories())
  }, [])

  return <CategoryContainer></CategoryContainer>
}

export default CategoryCarousel
