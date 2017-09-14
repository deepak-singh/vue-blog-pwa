import axios from 'axios'

let HTTP = axios.create({
  baseURL: 'https://blog-tastypie.herokuapp.com/api/v1/',
  timeout: 1000,
  Authorization: undefined
})

if (window.localStorage.getItem('api_key_header')) {
  HTTP.defaults.headers.common['Authorization'] = window.localStorage.getItem('api_key_header')
}

export default HTTP
