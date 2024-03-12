import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaLock } from 'react-icons/fa6'
import { FaUnlock } from 'react-icons/fa6'
import * as yup from 'yup'

import burgerLogoLogin from '../../assets/burger-logo-login.svg'
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
  InputWrapper,
  TextError
} from './styles'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
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

  const onSubmit = (data) => console.log(data)

  return (
    <MainContainer>
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
              <TextError>{errors.email?.message}</TextError>
            </Wrapper>
            <Wrapper>
              <Label htmlFor="pass">Senha:</Label>
              <InputWrapper $error={errors.password?.message}>
                <Input
                  id="pass"
                  type={showPassword ? 'password' : 'text'}
                  placeholder="Sua senha"
                  {...register('password')}
                />
                <div onClick={togglePasswordVisibility}>
                  {showPassword ? <FaLock /> : <FaUnlock />}
                </div>
              </InputWrapper>
              <TextError>{errors.password?.message}</TextError>
            </Wrapper>
            <Input type="submit" value="Entrar" className="submit" />
          </LoginContainer>
          <Register>
            Não possui conta? <a href="#">Cadastre-se</a>
          </Register>
        </ContainerItens>
      </ContainerWrapper>
    </MainContainer>
  )
}

export default Login
