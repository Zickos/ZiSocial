import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api'; 
axios.defaults.withCredentials = true; 

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axios;
