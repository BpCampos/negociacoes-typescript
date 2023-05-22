import axios from 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.js'

export const api = axios.create({
    baseURL: 'http://localhost:8080',
});