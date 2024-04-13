import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SideMenuContainer = styled.aside`
  width: 400px;
  background-color: #222121;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem 1rem;

  > hr {
    width: 100%;
    margin: 1rem 0;
    color: #555;
  }
`

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.5rem;

  > svg {
    font-size: 1.3rem;
  }

  &:hover {
    background-color: #565656;
  }
`

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;
`
