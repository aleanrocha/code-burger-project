import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'

import Button from '../../../components/Button'
import api from '../../../services/api'
import { NewProductContainer, Form, Label, Input } from './styles'

const NewProduct = () => {
  const { register, handleSubmit } = useForm()
  const [fileName, setFileName] = useState(null)

  useEffect(() => {
    const createProduct = async () => {
      const { data } = await api.post('/products')
    }
    createProduct()
  }, [])

  return (
    <NewProductContainer>
      <Form onSubmit={(onSubmit) => handleSubmit(onSubmit)}>
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
          {fileName ? `${fileName}` : 'Carregar imagem do produto'}
          <Input
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setFileName(e.target.files[0]?.name)}
          />
        </Label>

        <Select />

        <Button text={'Adicionar'} />
      </Form>
    </NewProductContainer>
  )
}

export default NewProduct
