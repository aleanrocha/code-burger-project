import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3000'
})

export default apiCodeBurger
