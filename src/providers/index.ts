import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://api.github.com/users/andr3felipe',
})
