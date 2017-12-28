import axios from 'axios'

const mock = true
const  mockUrl= 'http://10.9.17.73:8000/api/'
const serverUrl = 'http://localhost:3000/api/'
const baseUrl = mock ? mockUrl : serverUrl

axios.defaults.baseURL = baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'