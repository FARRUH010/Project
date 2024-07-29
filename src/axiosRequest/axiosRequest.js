import axios from 'axios'

export const axiosTodo = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL_TODO,
})