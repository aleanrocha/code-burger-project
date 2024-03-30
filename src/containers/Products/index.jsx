import { useEffect, useState } from 'react'

import banner from '../../assets/banner-burger-products.svg'
import CardProduct from '../../components/CardProduct'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  BannerContainer,
  BannerImage,
  CategoryButton,
  MenuContainer,
  ProductContainer
} from './styles'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      const newCategories = [{ id: 0, name: 'Todos' }, ...data]
      setCategories(newCategories)
    }
    const loadProducts = async () => {
      const { data } = await api.get('/products')
      const products = data.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(products)
    }
    loadCategories()
    loadProducts()
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
      <ProductContainer>
        {products &&
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductContainer>
    </>
  )
}

export default Home
