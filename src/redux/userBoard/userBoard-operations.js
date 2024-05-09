import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestBoardById,
  requestAddBoard,
  requestDeleteBoardById,
  updateBoardById,
  requestAllBoards,
} from '../../api/boards-api';

export const getAllBoards = createAsyncThunk(
  'boards/fetchAll',
  async (body, { rejectWithValue }) => {
    try {
      const data = await requestAllBoards(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getBoardByID = createAsyncThunk(
  'boards/fetchById',
  async (_, { rejectWithValue }) => {
    try {
      const data = await requestBoardById(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message.data.message);
    }
  }
);

export const deleteBoardByID = createAsyncThunk(
  'boards/delete',
  async (id, { rejectWithValue }) => {
    try {
      await requestDeleteBoardById(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message.data.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await requestAddBoard(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message.data.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/update',
  async (id, { rejectWithValue }) => {
    try {
      const data = await updateBoardById(id);
    } catch (error) {
      return rejectWithValue(error.message.data.message);
    }
  }
);
