import PropTypes from 'prop-types'

import { UserProvider } from './UserContext'

export const AppProvider = ({ children }) => (
  <UserProvider>{children}</UserProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}
