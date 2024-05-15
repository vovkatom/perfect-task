import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const setToken = (accessToken) => {
  if (accessToken) {
    return (axiosInstance.defaults.headers.authorization = `Bearer ${accessToken}`);
  }
  axiosInstance.defaults.headers.authorization = '';
};
