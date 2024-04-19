import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Btn = styled(Link)`
  background-color: #9758a4;
  color: #fafafa;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 580px) {
    font-size: 1rem;
  }
`

export default Btn
