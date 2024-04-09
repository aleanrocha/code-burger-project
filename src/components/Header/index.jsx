import { FaUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import useUser from '../../hooks/useUser'
import {
  HeaderContainer,
  ContainerItems,
  NavBar,
  Link,
  CartContent,
  UserContent
} from './styles'

const Header = () => {
  const { logout } = useUser()
  const navigate = useNavigate()
  const user = localStorage.getItem('clientData')
  const userName = JSON.parse(user).name

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

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
            <p>Olá, {userName}</p>
            <Link onClick={logoutUser}>Sair</Link>
          </UserContent>
        </CartContent>
      </ContainerItems>
    </HeaderContainer>
  )
}

export default Header
