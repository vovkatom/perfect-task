
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


//  GET 
export const fetchBoards = createAsyncThunk(
    'boards/fetchBoards',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/boards');
        return res.data;
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
        const response = await axios.post('/boards', { ...body });
        return { ...body, ...response.data };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
// PATCH
 export const updateBoardPatchById = createAsyncThunk(
    'boards/updateBoardPatchById',
    async (board, thunkAPI) => {
      const { _id, background } = board;
      try {
        await axios.patch(`/boards/${_id}`, {
          background,
        });
        return {_id, background};
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
            await axios.delete(`/boards/${_id}`);
            return _id;
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        }
      );
// PUT
export const updateBoardById = createAsyncThunk(
    'boards/updateBoardById',
    async (board, thunkAPI) => {
      const { _id, title, icon, background } = board;
  
      try {
       await axios.put(`/boards/${_id}`, {
          title,
          icon,
          background,
        });
        return board;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
  

//POST  id columns

export const addTask = createAsyncThunk(
  'boards/addTask',
  async ({_id,body}, thunkAPI) => {
    try {
      const response = await axios.post(`/columns/${_id}/tasks`, { ...body });
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
      const response = await axios.post('/columns', { ...body });
      return response.data;
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
      await axios.patch(`/columns/${_id}`, {
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
         await axios.delete(`/columns/${_id}`);
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
      await axios.put(`/tasks/${_id}`, {
        title,
        description, 
        deadline, 
        priority, 
        column
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
    const { _id, column} = task;
    try {
      axios.patch(`/tasks/${_id}`, {
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
          await axios.delete(`/tasks/${_id}`);
          return task;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
  }
);

