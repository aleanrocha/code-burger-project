import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import * as Yup from 'yup'

import ErrorMessage from '../../../components/ErrorMessage'
import api from '../../../services/api'
import { NewProductContainer, Form, Label, Input, Submit } from './styles'

const NewProduct = () => {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const onSubmit = (data) => console.log(data)

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    price: Yup.string().required('Preço obrigatório'),
    category: Yup.object().required('Selecione uma Categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue uma imagem', (value) => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue imagens de até 2 MB', (value) => {
        return value[0]?.size > 200480
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

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <NewProductContainer>
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
    </NewProductContainer>
  )
}

export default NewProduct
