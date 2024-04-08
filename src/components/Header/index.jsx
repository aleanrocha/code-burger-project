import { FaUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'

import {
  HeaderContainer,
  ContainerItems,
  NavBar,
  Link,
  CartContent,
  UserContent
} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <ContainerItems>
        <NavBar>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={'/'}
          >
            Home
          </Link>
          <Link to={'/produtos'}>Produtos</Link>
        </NavBar>
        <CartContent>
          <Link to={'/carrinho'}>
            <FiShoppingCart />
          </Link>
          <span></span>
          <Link>
            <FaUser />
          </Link>
          <UserContent>
            <p>Olá Alean</p>
            <Link>Sair</Link>
          </UserContent>
        </CartContent>
      </ContainerItems>
    </HeaderContainer>
  )
}

export default Header
