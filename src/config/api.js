import axios from 'axios'

export const ValduhortAPI = (timeout = 60000) => {
    const api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout,
    })
    return api
}