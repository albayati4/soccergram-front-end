import Axios from 'axios'


export const BASE_URL = 'http://localhost:3001/api'
let apiUrl = process.env.NODE_ENV === 'production' ? 'https://guarded-ravine-20374.herokuapp.com/' : 'https://localhost:3001/api'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config;
    },
    (error) => Promise.reject(error) 
)

export default Client