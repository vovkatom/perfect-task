import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://perfect-task-back.onrender.com/api',
});

export const signupRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signup', body);
  return data;
};
