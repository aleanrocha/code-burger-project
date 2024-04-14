import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import paths from '../../constants/paths'

const Layout = () => {
  const { pathname } = useLocation()
  const isAdminPanelRoute = [
    paths.AdPanel,
    paths.ListProducts,
    paths.EditProduct,
    paths.NewProduct
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
