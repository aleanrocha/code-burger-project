import styled from 'styled-components'

export const CartItemsContainer = styled.div`
  width: 95%;
  max-width: 800px;
  margin: auto;
  background-color: #fafafa;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  padding: 1rem;
  border-bottom: 2px solid #cac8c8;

  .itemCol2 {
    grid-column: span 2;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const ParagraphWrapper = styled.p`
  font-size: 1.2rem;
  color: #888888;
  font-weight: 700;

  &.emptyCart {
    padding: 2rem 1rem;
    text-align: center;
    color: black;
  }
`

export const Image = styled.img`
  width: 120px;
  border-radius: 0.5rem;

  @media screen and (max-width: 720px) {
    width: 220px;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  justify-items: center;
  align-items: center;

  > p {
    color: black;
    font-size: 1rem;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
