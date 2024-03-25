import PropTypes from 'prop-types'

import Btn from './styles'

const Button = (props) => {
  return <Btn {...props}>{props.text}</Btn>
}

export default Button

Button.propTypes = {
  text: PropTypes.string
}
