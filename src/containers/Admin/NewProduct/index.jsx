import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import * as Yup from 'yup'

import ErrorMessage from '../../../components/ErrorMessage'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import { NewProductContainer, Form, Label, Input, Submit } from './styles'

const NewProduct = () => {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    price: Yup.string().required('Preço obrigatório'),
    category: Yup.object().required('Selecione uma Categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue uma imagem', (value) => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue imagens de até 2 MB', (value) => {
        return value[0]?.size < 200480
      })
      .test('fileType', 'Carregue apenas imagens jpg/png', (value) => {
        return value[0]?.type === 'image/png' || value[0]?.type === 'image/jpeg'
      })
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
    newProductFormData.append('category_id', data.category.id)

    await toast.promise(api.post('/products', newProductFormData), {
      pending: 'Asicionando produto...',
      success: 'Produto adicionado!',
      error: 'Erro ao adicionar produto, tente novamente!'
    })

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
      <h2>Adicionar Produto</h2>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          placeholder="Nome do produto"
          {...register('name')}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label htmlFor="price">Preço</Label>
        <Input
          id="price"
          type="number"
          placeholder="Preço do produto"
          {...register('price')}
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
          render={({ field }) => (
            <Select
              {...field}
              options={categories}
              getOptionLabel={(cat) => cat.name}
              getOptionValue={(cat) => cat.id}
              placeholder="Categorias"
            />
          )}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <Submit type="submit">Adicionar</Submit>
      </Form>
      <ToastContainer autoClose={2000} />
    </NewProductContainer>
  )
}

export default NewProduct
