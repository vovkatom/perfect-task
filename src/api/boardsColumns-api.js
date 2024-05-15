import { axiosInstance } from './axios-instance';

export const requestColumnById = async (id) => {
  const { data } = await axiosInstance.get(`/columns/${id}`);
  console.log(id);
  console.log(data);
  return { data };
};

export const requestAddColumns = async (body) => {
  const { data } = await axiosInstance.post('/columns', body);
  console.log(data);
  return data;
};

export const requestDeleteColumnById = async (id) => {
  const { data } = await axiosInstance.delete(`/columns/${id}`);
  return { data };
};

export const updateColumnById = async (id) => {
  const { data } = await axiosInstance.put(`/columns/${id}`);
  return { data };
};
