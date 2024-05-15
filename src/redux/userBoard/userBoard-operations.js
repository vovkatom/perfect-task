import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axios-instance';
import * as boardsApi from '../../api/boards-api';
import * as boardsColumnsApi from '../../api/boardsColumns-api';
import * as cardsApi from '../../api/boardsCards-api';
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

// POST board
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

//   DELETE board
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

// PUT board
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

//POST  card

export const addCard = createAsyncThunk(
  'boards/addTask',
  async (body, thunkAPI) => {
    try {
      const response = await cardsApi.requestAddCard(body);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//UPDATE card by id

export const updateCardById = createAsyncThunk(
  'cards/updateCardById',
  async (_id, thunkAPI) => {
    try {
      const data = await cardsApi.updateCardById(_id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//DELETE card by id

export const deleteCard = createAsyncThunk(
  'boards/deleteTask',
  async (task, thunkAPI) => {
    const { _id } = task;
    try {
      await cardsApi.requestDeleteCardById(_id);
      return task;
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

//PUT id columns
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

//DELETE id  columns
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

//  PUT id  task
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
