import styled from 'styled-components'

export const ProductContainer = styled.section`
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`
export const Product = styled.div`
  background-color: #9c6da85c;
  width: 95%;
  max-width: 380px;
  min-height: 155px;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
`

export const ProductImage = styled.div`
  width: 50%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`

export const ProductInfo = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  > a {
    border-radius: 10rem;
    font-size: 1rem;
  }
`

export const ProductName = styled.h3`
  text-align: center;
  font-size: 1rem;
`

export const ProductPrice = styled.p`
  text-align: center;
  color: #4b4949;
  font-weight: 900;
`
