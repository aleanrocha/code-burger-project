import styled from 'styled-components'

export const OffersContainer = styled.section`
  width: 100%;
  padding: 2rem;

  > swiper-container {
    width: 100%;
    max-width: 1040px;
    margin: auto;
    cursor: grab;

    @media screen and (max-width: 580px) {
      width: 300px;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 1rem;
  }
`

export const OfferTitle = styled.h2`
  color: #9758a4;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;

  @media screen and (max-width: 580px) {
    font-size: 1.5rem;
  }
`

export const SlideContent = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 2rem 0 3rem;

  @media screen and (max-width: 580px) {
    width: 85%;
    margin: 2rem auto 3rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 199px;
  border-radius: 0.5rem;
`

export const Title = styled.h3`
  font-size: 1.2rem;
`
export const Text = styled.p`
  font-weight: 300;
`
