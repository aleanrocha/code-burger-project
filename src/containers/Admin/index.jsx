import { useLocation } from 'react-router-dom'

import SideMenuAdmin from '../../components/SideMenuAdmin'
import paths from '../../constants/paths'
import ListProducts from './ListPoducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { AdminContainer } from './styles'

const Admin = () => {
  const { pathname } = useLocation()

  return (
    <AdminContainer>
      <SideMenuAdmin />
      {pathname === paths.AdPanel && <Orders />}
      {pathname === paths.ListProducts && <ListProducts />}
      {pathname === paths.NewProduct && <NewProduct />}
    </AdminContainer>
  )
}

export default Admin
