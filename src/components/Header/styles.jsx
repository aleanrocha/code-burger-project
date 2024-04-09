import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1rem;
`

export const ContainerItems = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 95%;
  max-width: 1258px;
  margin: 0 auto;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 1.5rem;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: #555;
  cursor: pointer;
  position: relative;

  &.active {
    color: #9758a6;
    font-weight: 900;
  }

  ${(props) =>
    props.$isCartData &&
    `
    &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: -10;
    right: -10p;
    background-color: red;
  }

  `}
`

export const CartContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  > span {
    height: 20px;
    width: 2px;
    background-color: #9758a6;
  }

  > a {
    color: #9758a6;
    font-size: 1.5rem;
  }
`

export const UserContent = styled.div`
  > a {
    color: #9758a6;
    font-weight: 700;
  }
`
