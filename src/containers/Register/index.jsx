import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaLock } from 'react-icons/fa6'
import { FaUnlock } from 'react-icons/fa6'
import * as yup from 'yup'

import burgerLogoLogin from '../../assets/burger-logo-login.svg'
import api from '../../services/api'
import {
  MainContainer,
  ContainerWrapper,
  RegisterImage,
  ContainerItens,
  Title,
  RegisterContainer,
  Image,
  Label,
  Input,
  LoginLink,
  Wrapper,
  InputWrapper,
  TextError
} from './styles'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório'),
    email: yup
      .string()
      .email('E-mail invalido')
      .required('Este campo é obrigatório'),
    password: yup
      .string()
      .required('Este campo é obrigatório')
      .min(8, 'Senha: Mínimo de 8 caracteres'),
    confirmPass: yup
      .string()
      .required('Este campo é obrigatório')
      .oneOf([yup.ref('password')], 'As senha devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      await api.post('users', {
        name: data.name,
        email: data.email,
        password: data.password
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <MainContainer>
      <ContainerWrapper>
        <RegisterImage />
        <ContainerItens>
          <Image src={burgerLogoLogin} alt="Logo Code Burger" />
          <Title>Cadastre-se 🍔</Title>
          <RegisterContainer noValidate onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
              <Label htmlFor="name">Nome:</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                {...register('name', {
                  required: 'Este campo é obrigatório!'
                })}
                $error={errors.name?.message}
              />
              <TextError>{errors.name?.message}</TextError>
            </Wrapper>
            <Wrapper>
              <Label htmlFor="email">E-mail:</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                {...register('email', {
                  required: 'Este campo é obrigatório!'
                })}
                $error={errors.email?.message}
              />
              <TextError>{errors.email?.message}</TextError>
            </Wrapper>
            <Wrapper>
              <Label htmlFor="pass">Senha:</Label>
              <InputWrapper $error={errors.password?.message}>
                <Input
                  id="pass"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Crie uma senha forte"
                  {...register('password')}
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaUnlock /> : <FaLock />}
                </div>
              </InputWrapper>
              <TextError>{errors.password?.message}</TextError>
            </Wrapper>
            <Wrapper>
              <Label htmlFor="confirmPass">Confirmar senha:</Label>
              <InputWrapper $error={errors.password?.message}>
                <Input
                  id="confirmPass"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirme sua senha"
                  {...register('confirmPass')}
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaUnlock /> : <FaLock />}
                </div>
              </InputWrapper>
              <TextError>{errors.confirmPass?.message}</TextError>
            </Wrapper>
            <Input type="submit" value="Catastrar" className="submit" />
          </RegisterContainer>
          <LoginLink>
            Já possui conta?<a href="#"> Login</a>
          </LoginLink>
        </ContainerItens>
      </ContainerWrapper>
    </MainContainer>
  )
}

export default Login
