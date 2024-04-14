import SideMenuAdmin from '../../components/SideMenuAdmin'
import ListProducts from './ListPoducts'
// import Orders from './Orders'
import { AdminContainer } from './styles'

const Admin = () => {
  return (
    <AdminContainer>
      <SideMenuAdmin />
      {/* <Orders /> */}
      <ListProducts />
    </AdminContainer>
  )
}

export default Admin
