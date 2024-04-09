import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Layout = () => {
  const { pathname } = useLocation()

  return (
    <>
      {pathname !== '/ad-painel' && <Header />}
      {<Outlet />}
      {pathname !== '/ad-painel' && <Footer />}
    </>
  )
}

export default Layout
