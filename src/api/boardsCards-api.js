import { axiosInstance } from './axios-instance';

export const requestCardById = async (id) => {
  const { data } = await axiosInstance.get(`/cards/${id}`);
  console.log(id);
  console.log(data);
  return { data };
};

export const requestAddCard = async (body) => {
  const { data } = await axiosInstance.post('/cards', body);
  console.log(data);
  return data;
};

export const requestDeleteCardById = async (id) => {
  const { data } = await axiosInstance.delete(`/cards/${id}`);
  return { data };
};

export const updateCardById = async (id) => {
  const { data } = await axiosInstance.put(`/cards/${id}`);
  return { data };
};
