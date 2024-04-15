import PropTypes from 'prop-types'

import { TextError } from './styles'

const ErrorMessage = ({ children }) => {
  return <TextError>{children}</TextError>
}

export default ErrorMessage

ErrorMessage.propTypes = {
  children: PropTypes.string
}
