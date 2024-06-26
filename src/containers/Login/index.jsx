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
import useUser from '../../hooks/useUser'
import api from '../../services/api'
import {
  MainContainer,
  ContainerWrapper,
  LoginImage,
  ContainerItens,
  Image,
  Title,
  LoginContainer,
  Label,
  Input,
  Register,
  Wrapper,
  InputWrapper
} from './styles'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { putUserData } = useUser()
  const [isUser, setIsUser] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('E-mail invalido')
      .required('Este campo é obrigatório'),
    password: yup
      .string()
      .required('Este campo é obrigatório')
      .min(8, 'Senha: Mínimo de 8 caracteres')
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
      const { data: clientData, status } = await api.post(
        'sessions',
        {
          email: data.email,
          password: data.password
        },
        { validateStatus: () => true }
      )
      setIsAdmin(clientData.admin)
      setLoading(false)
      clientData.error ? null : putUserData(clientData)
      if (status === 201 || status === 200) {
        toast.success('Login realizado com sucesso!')
        setTimeout(() => setIsUser(true), 2000)
      } else if (status === 401) {
        toast.error('E-mail ou senha incorretos!')
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
      {isUser && (
        <Navigate to={isAdmin ? paths.AdPanel : paths.Home} replace={true} />
      )}
      <ContainerWrapper>
        <LoginImage />
        <ContainerItens>
          <Image src={burgerLogoLogin} alt="Logo Code Burger" />
          <Title>Entrar para Pedir 🍔</Title>
          <LoginContainer noValidate onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Sua senha"
                  {...register('password')}
                />
                <div onClick={togglePasswordVisibility}>
                  {showPassword ? <FaUnlock /> : <FaLock />}
                </div>
              </InputWrapper>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </Wrapper>
            <Input
              type="submit"
              value={!loading ? 'Entrar' : 'Entrando...'}
              className="submit"
            />
            <ToastContainer autoClose={2000} />
          </LoginContainer>
          <Register>
            Não possui conta? <Link to={paths.Register}>Cadastre-se</Link>
          </Register>
        </ContainerItens>
      </ContainerWrapper>
    </MainContainer>
  )
}

export default Login
