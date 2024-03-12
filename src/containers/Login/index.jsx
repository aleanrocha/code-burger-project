import { useState } from 'react'
import { FaLock } from 'react-icons/fa6'
import { FaUnlock } from 'react-icons/fa6'

import burgerLogoLogin from '../../assets/burger-logo-login.svg'
import {
  MainContainer,
  Container,
  LoginImage,
  ContainerItens,
  Image,
  Title,
  LoginContainer,
  Label,
  Input,
  Register,
  Wrapper
} from './styles'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <MainContainer>
      <Container>
        <LoginImage />
        <ContainerItens>
          <Image src={burgerLogoLogin} alt="Logo Code Burger" />
          <Title>Entrar para Pedir 🍔</Title>
          <LoginContainer>
            <Wrapper>
              <Label htmlFor="email">E-mail:</Label>
              <Input id="email" type="email" placeholder="Digite seu e-mail" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="pass">Senha:</Label>
              <div>
                <Input
                  id="pass"
                  type={showPassword ? 'password' : 'text'}
                  placeholder="Sua senha"
                />
                <div onClick={togglePasswordVisibility}>
                  {showPassword ? <FaLock /> : <FaUnlock />}
                </div>
              </div>
            </Wrapper>
            <Input type="submit" value="Entrar" className="submit" />
          </LoginContainer>
          <Register>
            Não possui conta? <a href="#">Cadastre-se</a>
          </Register>
        </ContainerItens>
      </Container>
    </MainContainer>
  )
}

export default Login
