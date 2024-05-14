import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axios-instance';
import * as boardsApi from '../../api/boards-api';
import * as boardsColumnsApi from '../../api/boardsColumns-api';

//  GET
export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, thunkAPI) => {
    try {
      const data = await boardsApi.requestAllBoards();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST
export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (body, thunkAPI) => {
    try {
      const data = await boardsApi.requestAddBoard(body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//   DELETE
export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (_id, thunkAPI) => {
    try {
      const response = await boardsApi.requestDeleteBoardById(_id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// PUT
export const updateBoardById = createAsyncThunk(
  'boards/updateBoardById',
  async (_id, thunkAPI) => {
    // const { _id, title, icon, background } = board;

    try {
      //   await axiosInstance.put(`/boards/${_id}`, {
      //     title,
      //     icon,
      //     background,
      //   });
      const data = await boardsApi.updateBoardById(_id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//POST  task

export const addTask = createAsyncThunk(
  'boards/addTask',
  async ({ _id, body }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/columns/${_id}/tasks`, {
        ...body,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST columns

export const addColumn = createAsyncThunk(
  'boards/addColumn',
  async (body, thunkAPI) => {
    try {
      const response = await boardsColumnsApi.requestAddColumns(body);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//PATCH id columns
export const updateColumnTitle = createAsyncThunk(
  'boards/updateColumnTitle',
  async (column, thunkAPI) => {
    const { _id, title } = column;
    try {
      await axiosInstance.patch(`/columns/${_id}`, {
        title,
      });
      return column;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// * DELETE id  columns
export const deleteColumn = createAsyncThunk(
  'boards/deleteColumn',
  async (_id, thunkAPI) => {
    try {
      await axiosInstance.delete(`/columns/${_id}`);
      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  PUT id  columns
export const updateTask = createAsyncThunk(
  'task/updateTask',
  async (task, thunkAPI) => {
    const { _id, title, description, deadline, priority, column } = task;
    try {
      await axiosInstance.put(`/tasks/${_id}`, {
        title,
        description,
        deadline,
        priority,
        column,
      });
      return task;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//PATCH id
export const updateTaskPlace = createAsyncThunk(
  'tasks/updateTaskPlace',
  async ({ task, oldColumn }, thunkAPI) => {
    const { _id, column } = task;
    try {
      axiosInstance.patch(`/tasks/${_id}`, {
        column,
      });
      return { task, oldColumn };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//DELETE id

export const deleteTask = createAsyncThunk(
  'boards/deleteTask',
  async (task, thunkAPI) => {
    const { _id } = task;
    try {
      await axiosInstance.delete(`/tasks/${_id}`);
      return task;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
