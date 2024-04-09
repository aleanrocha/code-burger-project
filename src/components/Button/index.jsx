import PropTypes from 'prop-types'

import Btn from './styles'

const Button = ({ text, click, to, state }) => {
  return (
    <Btn to={to} state={state} onClick={click}>
      {text}
    </Btn>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func,
  to: PropTypes.string,
  state: PropTypes.number
}
