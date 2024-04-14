import { FaUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import paths from '../../constants/paths'
import useCart from '../../hooks/useCart'
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
  const { cartData } = useCart()
  const navigate = useNavigate()

  const user = localStorage.getItem('clientData')
  const userName = user && JSON.parse(user).name

  const logoutUser = () => {
    logout()
    navigate(paths.Login)
  }

  return (
    <HeaderContainer>
      <ContainerItems>
        <NavBar>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to={paths.Home}
          >
            Home
          </Link>
          <Link to={paths.Products}>Produtos</Link>
        </NavBar>
        <CartContent>
          <Link to={paths.Cart} $isCartData={cartData.length > 0}>
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
