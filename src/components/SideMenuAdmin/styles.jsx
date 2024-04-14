import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SideMenuContainer = styled.aside`
  width: 400px;
  background-color: #222121;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 4rem 1rem 1rem;
  position: relative;

  > hr {
    width: 100%;
    margin: 1rem 0;
    color: #555;
  }
`

export const ItemContainer = styled.div`
  background-color: ${(props) => (props.$isActive ? '#565656' : 'none')};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 0.5rem;

  > svg {
    font-size: 1.3rem;
  }
`

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  padding: 1rem 0;
`
