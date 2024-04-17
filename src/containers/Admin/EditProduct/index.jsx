import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import * as Yup from 'yup'

import ErrorMessage from '../../../components/ErrorMessage'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import { NewProductContainer, Form, Label, Input, Submit } from './styles'

const EditProduct = () => {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const { state: product } = useLocation()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    price: Yup.string().required('Preço obrigatório'),
    category: Yup.object().required('Selecione uma Categoria'),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    const newProductFormData = new FormData()
    newProductFormData.append('name', data.name)
    newProductFormData.append('price', data.price)
    newProductFormData.append('file', data.file[0])
    newProductFormData.append('category_id', data.category.id),
      newProductFormData.append('offer', data.offer)

    await toast.promise(
      api.put(`/products/${product.id}`, newProductFormData),
      {
        pending: 'Editando produto...',
        success: 'Produto editado!',
        error: 'Erro ao editar produto, tente novamente!'
      }
    )

    setTimeout(() => {
      navigate(paths.ListProducts)
    }, 2000)
  }

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <NewProductContainer>
      <h2>Editar Produto</h2>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          placeholder="Nome do produto"
          {...register('name')}
          defaultValue={product.name}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label htmlFor="price">Preço</Label>
        <Input
          id="price"
          type="number"
          placeholder="Preço do produto"
          {...register('price')}
          defaultValue={product.price}
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <Label htmlFor="image" className="file">
          {fileName ? fileName : 'Carregar imagem do produto'}
          <Input
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(e) => setFileName(e.target.files[0]?.name)}
          />
        </Label>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>

        <Controller
          name="category"
          control={control}
          defaultValue={product.category}
          render={({ field }) => (
            <Select
              {...field}
              options={categories}
              getOptionLabel={(cat) => cat.name}
              getOptionValue={(cat) => cat.id}
              placeholder="Categorias"
              defaultValue={product.category}
            />
          )}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <Label htmlFor="offer" style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="checkbox"
            id="offer"
            {...register('offer')}
            defaultChecked={product.offer}
          />
          Em oferta
        </Label>

        <Submit type="submit">Editar</Submit>
      </Form>
      <ToastContainer autoClose={2000} />
    </NewProductContainer>
  )
}

export default EditProduct
