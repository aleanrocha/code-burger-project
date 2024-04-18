import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://code-burger-api.up.railway.app/'
})

apiCodeBurger.interceptors.request.use(async (config) => {
  const userDataString = await localStorage.getItem('clientData')
  const userData = userDataString && JSON.parse(userDataString).token
  config.headers.Authorization = `Bearer ${userData}`
  return config
})

export default apiCodeBurger
