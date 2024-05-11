import { refresh } from '../redux/auth/auth-operations';
import { logout } from '../redux/auth/auth-operations';
import { axiosInstance } from './axios-instance';
import { setToken } from './axios-instance';

export const axiosInstance = axios.create({
  baseURL: 'https://perfect-task-back.onrender.com/api',
});

const setToken = (accessToken) => {
  if (accessToken) {
    return (axiosInstance.defaults.headers.authorization = `Bearer ${accessToken}`);
  }
  axiosInstance.defaults.headers.authorization = '';
};

export const setupAxiosInterceptors = (store) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        try {
          const { refreshToken } = store.getState().auth;
          if (refreshToken) {
            store.dispatch(refresh({ refreshToken }));
            const { accessToken } = store.getState().auth;
            error.config.headers.authorization = `Bearer ${accessToken}`;
          }

          return axios.request(error.config);
        } catch (error) {
          store.dispatch(logout());
          return Promise.reject(error);
        }
      }
      if (error.responce.status === 403) {
        store.dispatch(logout());
      }
      return Promise.reject(error);
    }
  );
};

export const refreshRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/refresh', {
    refreshToken: body,
  });
  setToken(data.accessToken);
  return data;
};

export const signupRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signup', body);
  setToken(data.accessToken);
  return data;
};

export const loginRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signin', body);
  setToken(data.accessToken);
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
