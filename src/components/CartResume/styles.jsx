import styled from 'styled-components'

export const CartResumeContainer = styled.div`
  width: 100%;
  max-width: 380px;
  position: sticky;
  top: 1rem;
  left: 0;

  > button {
    width: 100%;
    margin-top: 1.5rem;
    border-radius: 0;
  }
  @media screen and (max-width: 992px) {
    width: 95%;
    max-width: 800px;
    margin: auto;
  }
`

export const ContainerItems = styled.div`
  background-color: #fafafa;
  padding: 1rem;
  width: 100%;

  & > .container-top {
    display: grid;
    grid-template-areas:
      'title title'
      'items items-price'
      'tax tax-price';
    justify-content: space-between;
    font-weight: 400;
    grid-gap: 0.5rem;

    .title {
      grid-area: title;
      margin-bottom: 1rem;
    }
    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
    }
    .tax {
      grid-area: tax;
    }
    .tax-price {
      grid-area: tax-price;
    }
  }

  & > .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 1rem;
  }
`
