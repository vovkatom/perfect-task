import axios from 'axios';
import { refresh } from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const axiosInstance = axios.create({
  baseURL: 'https://perfect-task-back.onrender.com/api',
});

const setToken = (token) => {
  if (token) {
    return (axiosInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  axiosInstance.defaults.headers.authorization = '';
};

export const signupRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signup', body);
  setToken(data.accesstoken);
  return data;
};

export const loginRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signin', body);
  setToken(data.accesstoken);
  return data;
};

export const currentRequest = async (token) => {
  setToken(token);
  try {
    const { data } = await axiosInstance.get('/users/current');
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

export const refreshRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/refresh', body);
  setToken(data.accessToken);
  return data;
};

/*global getState, instance*/ // не заберати цей коментар
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      try {
        const { auth } = getState();
        const dispatch = useDispatch;
        dispatch(refresh(auth.refreshToken));
        const { newAuth } = getState();
        setToken(newAuth.accessToken);
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    if (error.response.status == 403) {
      logoutRequest();
    }
    return Promise.reject(error);
  }
);