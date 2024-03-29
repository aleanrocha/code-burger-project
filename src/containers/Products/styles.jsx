import styled from 'styled-components'

export const BannerContainer = styled.section`
  width: 100%;
`

export const BannerImage = styled.img`
  width: 100%;
`

export const MenuContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem 1rem;
`
export const CategoryButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.$isActive ? '#9758a6' : 'gray')};
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s width linear;
  position: relative;

  &:hover {
    color: #9758a6;
  }
  &::after {
    content: '';
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    height: 3px;
    background-color: #9758a6;
    position: absolute;
    bottom: -0.3rem;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`
