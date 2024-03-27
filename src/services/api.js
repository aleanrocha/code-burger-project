import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3000'
})

apiCodeBurger.interceptors.request.use(async (config) => {
  const userDataString = await localStorage.getItem('clientData')
  const userData = userDataString && JSON.parse(userDataString).token
  config.headers.Authorization = `Bearer ${userData}`
  return config
})

export default apiCodeBurger
