import { TbChecks, TbCircleXFilled } from 'react-icons/tb'
import styled from 'styled-components'

export const ListProductsContainer = styled.div`
  width: 100%;
  padding: 2rem;
  max-width: 992px;
  margin: 0 auto;
`
export const Image = styled.img`
  width: 90px;
  border-radius: 0.5rem;
`

export const Button = styled.button`
  background-color: #9758a6;
  color: #fff;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.85;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`

export const CheckIcon = styled(TbChecks)`
  font-size: 2rem;
  color: #3de600;
`

export const Xicon = styled(TbCircleXFilled)`
  font-size: 2rem;
  color: #fc1111;
`
