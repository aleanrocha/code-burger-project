import SideMenuAdmin from '../../components/SideMenuAdmin'
import Orders from './Orders'
import { AdminContainer } from './styles'

const Admin = () => {
  return (
    <AdminContainer>
      <SideMenuAdmin />
      <Orders />
    </AdminContainer>
  )
}

export default Admin
