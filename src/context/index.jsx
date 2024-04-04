import PropTypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

export const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}
