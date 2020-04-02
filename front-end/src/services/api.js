import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.icndb.com/'
})

export default api;