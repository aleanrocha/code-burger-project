import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import paths from '../constants/paths'

const Protected = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const user = localStorage.getItem('clientData')
  const [redirecting, setRedirecting] = useState(true)

  useEffect(() => {
    if (!user) {
      navigate(paths.Login, { replace: true })
    } else if (pathname === paths.AdPanel && !JSON.parse(user).admin) {
      navigate(paths.Home, { replace: true })
    } else {
      setRedirecting(false)
    }
  }, [navigate, pathname, user])

  return redirecting ? null : children
}

export default Protected

Protected.propTypes = {
  children: PropTypes.node
}
