import axios from 'axios'

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
console.log(import.meta.env)

axiosInstance.defaults.withCredentials = true

export default axiosInstance