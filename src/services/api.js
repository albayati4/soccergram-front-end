import Axios from 'axios'


export const BASE_URL = process.env.NODE_ENV === 'local' ? 'http://localhost:3001/api' : 'https://soccergram-back.herokuapp.com/api'
console.log(BASE_URL, 'This is BASE_URL')
const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
            config.headers['access-control-allow-origin'] = '*'
        }
        return config;
    },
    (error) => Promise.reject(error) 
)

export default Client