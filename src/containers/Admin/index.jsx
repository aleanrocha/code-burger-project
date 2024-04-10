import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState, useEffect } from 'react'

import api from '../../services/api'
import formatDate from '../../utils/formatDate'
import Orders from './Orders'
import Row from './row'
import { AdminContainer } from './styles'

const Admin = () => {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])
  console.log(orders)
  console.log(rows)

  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get('/orders')
      setOrders(data)
    }
    loadOrders()
  }, [])

  const createData = (order) => {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = orders.map((order) => createData(order))
    setRows(newRows)
  }, [orders])

  return (
    <AdminContainer>
      <Orders />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminContainer>
  )
}

export default Admin
