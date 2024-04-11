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
import options from './select-options'
import { AdminContainer, Menu, LinkMenu, EmptyTableInfo } from './styles'

const Admin = () => {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(0)

  const filterStatus = [{ id: 0, label: 'Todos', value: 'Todos' }, ...options]

  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get('/orders')
      setOrders(data)
      setFilteredOrders(data)
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
    const newRows = filteredOrders.map((order) => createData(order))
    setRows(newRows)
  }, [filteredOrders])

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = filterStatus.findIndex(
        (sts) => sts.id === activeStatus
      )
      const newfilteredOrders = orders.filter(
        (order) => order.status === filterStatus[statusIndex].value
      )
      setFilteredOrders(newfilteredOrders)
    }
  }, [orders])

  const handleStatus = (status) => {
    if (status.id === 0) {
      setFilteredOrders(orders)
    } else {
      const newOrders = orders.filter((order) => order.status === status.value)
      setFilteredOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  return (
    <AdminContainer>
      <Orders />
      <Menu>
        {filterStatus &&
          filterStatus.map((status) => (
            <LinkMenu
              key={status.id}
              onClick={() => handleStatus(status)}
              $isActiveStatus={activeStatus === status.id}
            >
              {status.value}
            </LinkMenu>
          ))}
      </Menu>
      {filteredOrders && filteredOrders.length > 0 ? (
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
                <Row
                  key={row.orderId}
                  row={row}
                  orders={orders}
                  setOrders={setOrders}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <EmptyTableInfo>Ops, Nada por aqui!</EmptyTableInfo>
      )}
    </AdminContainer>
  )
}

export default Admin
