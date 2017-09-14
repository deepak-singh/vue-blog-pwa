import axios from 'axios'

let HTTP = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  Authorization: undefined
})

if (window.localStorage.getItem('api_key_header')) {
  HTTP.defaults.headers.common['Authorization'] = window.localStorage.getItem('api_key_header')
}

export default HTTP
