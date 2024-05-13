
import { axiosInstance } from './axios-instance';
import { setToken } from './axios-instance';


//boards
export const requestAllBoards = async token => {
 setToken(token);
  try { 
 const data = await axiosInstance.get('/boards');
  return data;
} catch (error) {
    setToken();
    throw error;
  }
};


export const requestBoardById = async (boardId, token) => {
setToken(token);
  try {
  const  data  = await axiosInstance.get(`/boards/${boardId}`);
  return { data };
 } catch (error) {
    setToken();
    throw error;
  }
};



export const requestAddBoard = async (body) => {
  return await axiosInstance.post('/boards', body);
  
};


export const updateBoardById = async (boardId, body) => {
  return await axiosInstance.put(`/boards/${boardId}`);
};


export const requestDeleteBoardById = async (boardId) => {
  return await axiosInstance.delete(`/boards/${boardId}`);
  
};




//columns
export const requestGetColumns =  async (boardId, token) => {
  setToken(token);
  try {
    const data = await axiosInstance.get(`/boards/current/${boardId}`);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const requestAddColumn = async (boardId, body) => {
  return await axiosInstance.post(`/boards/current/${boardId}`, body);
};

export const updateColumnById = async (boardId, columnId, body) => {
  return await axiosInstance.put(`/boards/current/${boardId}/${columnId}`, body);
};

export const requestDeleteColumn = async (boardId, columnId) => {
  return await axiosInstance.delete(`/boards/current/${boardId}/${columnId}`);
};

//tasks------------------------------------------------------
export const addTaskRequest = async (columnId, body) => {
  return await axiosInstance.post(`/boards/current-column/${columnId}`, body);
};


export const updateTaskById = async (columnId, taskId, body) => {
  return await axiosInstance.put(`/boards/current-column/${columnId}/${taskId}`, body);
};

export const requestDeleteTaskById= async (columnId, taskId) => {
  return await axiosInstance.delete(`/boards/current-column/${columnId}/${taskId}`);
};


//import { refresh } from '../redux/auth/auth-operations';
// import { useDispatch } from 'react-redux';
// import { axiosInstance } from '../api/auth-api.js';

// export const requestAllBoards = async () => {
//   const { data } = await axiosInstance.get('/boards');
//   return data;
// };

// export const requestBoardById = async (id) => {
//   const { data } = await axiosInstance.get(`/boards/${id}`);
//   return { data };
// };

// export const requestAddBoard = async (body) => {
//   const { data } = await axiosInstance.post('/boards', body);
//   return data;
// };

// export const requestDeleteBoardById = async (id) => {
//   const { data } = await axiosInstance.delete(`/boards/${id}`);
//   return { data };
// };

// export const updateBoardById = async (id) => {
//   const { data } = await axiosInstance.put(`/boards/${id}`);
//   return { data };
// };
