import Select from 'react-select'
import styled from 'styled-components'

export const OrdersContainer = styled.section`
  background-color: #e5e5e5;
  padding: 1rem 1rem 3rem;
`

export const RowContainer = styled.div``

export const ProductImage = styled.img`
  width: 100%;
  max-width: 120px;
  border-radius: 0.5rem;
`

export const SelectStyle = styled(Select)`
  width: 200px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 1rem;
`

export const LinkMenu = styled.a`
  text-decoration: none;
  color: #323d5d;
  font-size: 1rem;
  font-weight: ${(props) => (props.$isActiveStatus ? '700' : '400')};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? '3px solid  #323d5d' : 'none'};
  padding-bottom: 0.3rem;
  cursor: pointer;
`

export const EmptyTableInfo = styled.p`
  background-color: #fff;
  padding: 2.5rem 1rem;
  text-align: center;
  font-weight: 700;
`
