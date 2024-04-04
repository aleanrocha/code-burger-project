import PropTypes from 'prop-types'

import Btn from './styles'

const Button = ({ text, click }) => {
  return <Btn onClick={click}>{text}</Btn>
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func
}
