import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaLock } from 'react-icons/fa6'
import { FaUnlock } from 'react-icons/fa6'
import { Navigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import * as yup from 'yup'

import burgerLogoLogin from '../../assets/burger-logo-login.svg'
import ErrorMessage from '../../components/ErrorMessage'
import paths from '../../constants/paths'
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
  InputWrapper
} from './styles'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isUser, setIsUser] = useState(false)
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
      setLoading(true)
      const { status } = await api.post(
        'users',
        {
          name: data.name,
          email: data.email,
          password: data.password
        },
        { validateStatus: () => true }
      )
      setLoading(false)
      if (status === 201 || status === 200) {
        toast.success('Cadastro realizado com sucesso!')
        setTimeout(() => setIsUser(true), 2000)
      } else if (status === 409) {
        toast.error('E-mail já cadastrado. Faça login pra acessar.')
      } else {
        throw new Error()
      }
    } catch (error) {
      setLoading(false)
      console.error('Ocorreu um erro', error)
      toast.error('Erro no servidor. Por favor, tente novamente mais tarde.')
    }
  }

  return (
    <MainContainer>
      {isUser && <Navigate to={paths.Login} replace={true} />}
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
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
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
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
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
              <ErrorMessage>{errors.confirmPass?.message}</ErrorMessage>
            </Wrapper>
            <Input
              type="submit"
              value={!loading ? 'Cadastrar' : 'Cadastrando...'}
              className="submit"
            />
            <ToastContainer autoClose={2000} />
          </RegisterContainer>
          <LoginLink>
            Já possui conta?<Link to={paths.Login}> Entrar</Link>
          </LoginLink>
        </ContainerItens>
      </ContainerWrapper>
    </MainContainer>
  )
}

export default Register
