import { useEffect, useState } from 'react'

import banner from '../../assets/banner-burger-products.svg'
import api from '../../services/api'
import {
  BannerContainer,
  BannerImage,
  CategoryButton,
  MenuContainer
} from './styles'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      const newCategories = [{ id: 0, name: 'Todos' }, ...data]
      console.log(newCategories)
      setCategories(newCategories)
    }
    loadCategories()
  }, [])

  return (
    <>
      <BannerContainer>
        <BannerImage src={banner} alt="Image de um hamburger" />
      </BannerContainer>
      <MenuContainer>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              onClick={() => setActive(category.id)}
              $isActive={active === category.id}
              key={category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </MenuContainer>
    </>
  )
}

export default Home
