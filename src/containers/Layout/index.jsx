import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Layout = () => {
  const { pathname } = useLocation()
  const isAdminPanelRoute = [
    '/ad-painel',
    '/ad-painel/listar-produtos'
  ].includes(pathname)

  return (
    <>
      {!isAdminPanelRoute && <Header />}
      {<Outlet />}
      {!isAdminPanelRoute && <Footer />}
    </>
  )
}

export default Layout
