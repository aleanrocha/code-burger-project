import styled from 'styled-components'

import burgerLoginBg from '../../assets/burger-login-bg.svg'

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`
export const ContainerWrapper = styled.section`
  width: 95%;
  max-width: 800px;
  height: 580px;
  background-color: #373737;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    height: 640px;
  }
`
export const LoginImage = styled.div`
  width: 50%;
  height: 100%;
  background: #000 url(${burgerLoginBg}) no-repeat center / cover;
  @media screen and (max-width: 620px) {
    height: 30%;
    width: 100%;
  }
`
export const ContainerItens = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  color: #fafafa;
  @media screen and (max-width: 620px) {
    height: 70%;
    width: 100%;
  }
`
export const Image = styled.img`
  width: 180px;
  margin-bottom: 2rem;
  @media screen and (max-width: 620px) {
    display: none;
  }
`
export const Title = styled.h1`
  margin-bottom: 1rem;
`
export const LoginContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Label = styled.label`
  font-weight: 700;
  display: block;
  margin-bottom: 0.3rem;
`
export const Input = styled.input`
  width: 100%;
  padding: 0.4rem;
  font-size: 0.9rem;
  border: ${(props) => (props.$error ? '2px solid #f22' : 'none')};
  outline: none;
  border-radius: 0.4rem;
  height: 38px;

  &.submit {
    background-color: #9758a6;
    color: #fafafa;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1.5rem;
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
`

export const InputWrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  border: ${(props) => (props.$error ? '2px solid #f22' : 'none')};
  > div {
    font-size: 1.2rem;
    color: #000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
  }
`
export const TextError = styled.p`
  color: #f22;
  margin-top: 0.3rem;
  font-weight: 700;
`
export const Register = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  & > a {
    color: #9758a6;
    font-weight: 900;
    text-decoration: none;
    opacity: 0.9;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`
