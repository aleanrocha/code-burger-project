import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'

import paths from '../../../constants/paths'

import api from '../../../services/api'
import fromatCurrency from '../../../utils/formatCurrency'
import {
  ListProductsContainer,
  Image,
  Button,
  CheckIcon,
  Xicon
} from './styles'

export const ListProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await api.get('/products')
      setProducts(data)
    }
    loadProducts()
  }, [])

  return (
    <ListProductsContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Em Oferta</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{fromatCurrency(product.price)}</TableCell>
                  <TableCell align="center">
                    {product.offer ? <CheckIcon /> : <Xicon />}
                  </TableCell>
                  <TableCell>
                    <Image src={product.url} alt="Imagem do produto" />
                  </TableCell>
                  <TableCell>
                    <Button to={paths.EditProduct}>Editar</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ListProductsContainer>
  )
}

export default ListProducts
