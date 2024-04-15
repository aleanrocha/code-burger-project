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
  font-size: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const Label = styled.label`
  font-weight: 700;
  color: #fff;

  &.file {
    border: 1px dashed #fff;
    text-align: center;
    padding: 1rem;
    margin: 0.5rem 0rem 1rem;
    cursor: pointer;
    position: relative;
    > input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export const Input = styled.input`
  padding: 0.6rem;
  margin-bottom: 0.5rem;
`

export const Submit = styled.button`
  background-color: #9758a4;
  color: #fafafa;
  display: block;
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`
