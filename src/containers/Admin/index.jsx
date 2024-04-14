import { useLocation } from 'react-router-dom'

import SideMenuAdmin from '../../components/SideMenuAdmin'
import paths from '../../constants/paths'
import ListProducts from './ListPoducts'
import Orders from './Orders'
import { AdminContainer } from './styles'

const Admin = () => {
  const { pathname } = useLocation()

  return (
    <AdminContainer>
      <SideMenuAdmin />
      {pathname === paths.AdPanel ? <Orders /> : <ListProducts />}
    </AdminContainer>
  )
}

export default Admin
