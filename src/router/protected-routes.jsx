import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({ children }) => {
  const navigate = useNavigate()
  const user = localStorage.getItem('clientData')
  useEffect(() => {
    if (!user) {
      navigate('/entrar', { replace: true })
    }
  }, [navigate, user])

  return user ? children : null
}

export default Protected

Protected.propTypes = {
  children: PropTypes.node
}
