import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'

import Button from '../../../components/Button'
import api from '../../../services/api'
import { NewProductContainer, Form, Label, Input } from './styles'

const NewProduct = () => {
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    const createProduct = async () => {
      const { data } = await api.post('/products')
    }
    createProduct()
  }, [])

  return (
    <NewProductContainer>
      <Form onSubmit={(onSubmit) => handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input
          type="text"
          placeholder="Nome do produto"
          {...register('name')}
        />

        <Label>Preço</Label>
        <Input
          type="number"
          placeholder="Preço do produto"
          {...register('price')}
        />

        <Label>Upload da imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <Select />

        <Button text={'Adicionar'} />
      </Form>
    </NewProductContainer>
  )
}

export default NewProduct
