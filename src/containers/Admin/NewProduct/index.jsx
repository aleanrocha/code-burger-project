import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'

import api from '../../../services/api'
import { NewProductContainer, Form, Label, Input, Submit } from './styles'

const NewProduct = () => {
  const { register, handleSubmit, control } = useForm()
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <NewProductContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          placeholder="Nome do produto"
          {...register('name')}
        />

        <Label htmlFor="price">Preço</Label>
        <Input
          id="price"
          type="number"
          placeholder="Preço do produto"
          {...register('price')}
        />

        <Label htmlFor="image" className="file">
          {fileName ? fileName : 'Carregar imagem do produto'}
          <Input
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setFileName(e.target.files[0]?.name)}
          />
        </Label>

        <Controller
          name="category_id"
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

        <Submit type="submit">Adicionar</Submit>
      </Form>
    </NewProductContainer>
  )
}

export default NewProduct
