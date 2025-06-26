import axios from 'axios';

const axiosBase = axios.create({ 
    baseURL: 'http://localhost:1225/api',
});

export default axiosBase;
