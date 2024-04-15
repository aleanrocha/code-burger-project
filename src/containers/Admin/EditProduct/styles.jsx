import styled from 'styled-components'

export const NewProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  > h2 {
    color: #9758a4;
    text-transform: uppercase;
    font-weight: 900;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 380px;
  background-color: #222121;
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
    margin: 0.5rem 0rem 0rem;
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
