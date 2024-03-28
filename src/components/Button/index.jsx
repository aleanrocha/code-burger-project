import PropTypes from 'prop-types'

import Btn from './styles'

const Button = ({ text }) => {
  return <Btn>{text}</Btn>
}

export default Button

Button.propTypes = {
  text: PropTypes.string
}
