import { axiosInstance } from './axios-instance';

export const requestAllBoards = async () => {
  const { data } = await axiosInstance.get('/boards');
  return data;
};

export const requestBoardById = async (id) => {
  // Перевірка, чи ідентифікатор визначений
  if (id === undefined) {
    throw new Error('ID is not defined');
  }

  const { data } = await axiosInstance.get(`/boards/${id}`);
  return { data };
};

export const requestAddBoard = async (body) => {
  const { data } = await axiosInstance.post('/boards', body);
  return data;
};

export const requestDeleteBoardById = async (id) => {
  const { data } = await axiosInstance.delete(`/boards/${id}`);
  return { data };
};

export const updateBoardById = async (id, body) => {
  const { data } = await axiosInstance.put(`/boards/${id}`, body);
  return { data };
};

export const requestBgImages = async () => {
  const { data } = await axiosInstance.get('/boards/bgall');
  // console.log(data);
  return data;
};
