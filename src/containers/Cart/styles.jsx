import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: #e5e5e5;
`

export const BannerContainer = styled.div`
  width: 100%;
`

export const BannerImage = styled.img`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 1rem;
  padding: 3rem 1rem;
  max-width: 1280px;
  min-height: 100vh;
  margin: auto;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`
