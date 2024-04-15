import styled from 'styled-components'

export const NewProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 380px;
  background-color: #565656;
  color: #fff;
  font-size: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > a {
    margin-top: 1.5rem;
  }
`
export const Label = styled.label`
  font-weight: 700;
`

export const Input = styled.input`
  padding: 0.6rem;
  margin-bottom: 0.5rem;
`
