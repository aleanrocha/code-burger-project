import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState, useEffect } from 'react'

import api from '../../services/api'
import Orders from './Orders'
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
      date: order.createdAt,
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
    </AdminContainer>
  )
}

export default Admin
