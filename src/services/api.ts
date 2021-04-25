import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6085b782d14a870017578326.mockapi.io',
});

export default api;
