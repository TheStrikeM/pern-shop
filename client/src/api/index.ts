import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:5000/"
})