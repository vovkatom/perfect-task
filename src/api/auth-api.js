import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://perfect-task-back.onrender.com/api',
});

const setToken = (token) => {
  if (token) {
    return (axiosInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  axiosInstance.default.headers.authorization = '';
};

export const signupRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const loginRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signin', body);
  setToken(data.token);
  return data;
};

export const currentRequest = async (token) => {
  setToken(token);
  try {
    const { data } = await axiosInstance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const { data } = await axiosInstance.post('/users/logout');
  return data;
};
