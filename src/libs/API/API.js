import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

API.interceptors.response.use((response) => {
  const xAuthToken = response.headers['X-Auth-Token'.toLowerCase()]

  localStorage.setItem('xAuthToken', xAuthToken)

  return response
})

API.interceptors.request.use((request) => {
  const xAuthToken = localStorage.getItem('xAuthToken')

  if (xAuthToken) {
    request.headers['X-Auth-Token'] = xAuthToken
  }

  return request
})

export default API
