
//redux operation

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as boardsApi from '../../api/boards-api';

export const fetchRequestAllBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const {
        data: { boards },
      } = await boardsApi.requestAllBoardst(auth.accessToken);
      return boards;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchrequestBoardById = createAsyncThunk(
  'boards/fetchOne',
  async (boardId, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { data } = await boardsApi.requestBoardByIdt(
        boardId,
        auth.accessToken
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/add',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await boardsApi.requestAddBoard(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/put',
  async ({ boardId, body }, { rejectWithValue }) => {
    try {
      const { data } = await boardsApi.updateBoardById(boardId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);

    }
  }
);

export const deleteBoard = createAsyncThunk(

  'boards/delete',
  async (boardId, { rejectWithValue }) => {
    try {
      await boardsApi.requestDeleteBoardById(boardId);
      return boardId;
    } catch (error) {
      return rejectWithValue(error.message);

    }
  }
);

//colums---------------------------------------------------

export const fetchColumns = createAsyncThunk(
  'columns/fetchAll',
  async (boardId, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { data } = await boardsApi.requestGetColumns(
        boardId,
        auth.accessToken
      );
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/add',
  async ({ boardId, body }, { rejectWithValue }) => {
    try {

      const { data } = await boardsApi.requestAddColumn(boardId, body);
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const editColumn = createAsyncThunk(
  'columns/put',
  async ({ boardId, columnId, body }, { rejectWithValue }) => {
    try {
      const { data } = await boardsApi.updateColumnById(
        boardId,
        columnId,
        body
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/delete',
  async ({ boardId, columnId }, { rejectWithValue }) => {
    try {
      await boardsApi.requestDeleteColumn(boardId, columnId);
      return columnId;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


//task--------------------------------------------

export const addTaskRequest = createAsyncThunk(
  'tasks/add',
  async ({ columnId, body }, { rejectWithValue }) => {
    try {
      const { data } = await boardsApi.addTaskRequest(columnId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);

    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/put',
  async ({ columnId, taskId, body }, { rejectWithValue }) => {
    try {

      const { data } = await boardsApi.updateTaskById(columnId, taskId, body);
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteTaskById = createAsyncThunk(
  'Tasks/delete',
  async ({ columnId, taskId }, { rejectWithValue }) => {
    try {
      await boardsApi.requestDeleteTaskById(columnId, taskId);
      return taskId;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as dashboardsApi from '../../api/boards-api';

// export const fetchrequestAllBoards = createAsyncThunk(
//   'dashboards/fetchAll',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const {
//         data: { boards },
//       } = await dashboardsApi.requestAllBoardst(auth.accessToken);
//       return boards;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchrequestBoardById = createAsyncThunk(
//   'dashboards/fetchOne',
//   async (boardId, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const { data } = await dashboardsApi.getOneDashboardRequest(
//         boardId,
//         auth.accessToken
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addDashboard = createAsyncThunk(
//   'dashboards/add',
//   async (body, { rejectWithValue }) => {
//     try {
//       const { data } = await dashboardsApi.requestAddBoard(body);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const editDashboard = createAsyncThunk(
//   'dashboards/put',
//   async ({ boardId, body }, { rejectWithValue }) => {
//     try {
//       const { data } = await dashboardsApi.updateBoardById(boardId, body);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteDashboard = createAsyncThunk(
//   'dashboards/delete',
//   async (boardId, { rejectWithValue }) => {
//     try {
//       await dashboardsApi.requestDeleteBoardById(boardId);
//       return boardId;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // import axios from 'axios';
// // import { createAsyncThunk } from '@reduxjs/toolkit';

// // //  GET
// // export const fetchBoards = createAsyncThunk(
// //   'boards/fetchBoards',
// //   async (_, thunkAPI) => {
// //     try {
// //       const res = await axios.get('/boards');
// //       return res.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // // POST
// // export const addBoard = createAsyncThunk(
// //   'boards/addBoard',
// //   async (body, thunkAPI) => {
// //     try {
// //       const response = await axios.post('/boards', { ...body });
// //       return { ...body, ...response.data };
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );
// // // PATCH
// // export const updateBoardPatchById = createAsyncThunk(
// //   'boards/updateBoardPatchById',
// //   async (board, thunkAPI) => {
// //     const { _id, background } = board;
// //     try {
// //       await axios.patch(`/boards/${_id}`, {
// //         background,
// //       });
// //       return { _id, background };
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // //   DELETE
// // export const deleteBoard = createAsyncThunk(
// //   'boards/deleteBoard',
// //   async (_id, thunkAPI) => {
// //     try {
// //       await axios.delete(`/boards/${_id}`);
// //       return _id;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );
// // // PUT
// // export const updateBoardById = createAsyncThunk(
// //   'boards/updateBoardById',
// //   async (board, thunkAPI) => {
// //     const { _id, title, icon, background } = board;

// //     try {
// //       await axios.put(`/boards/${_id}`, {
// //         title,
// //         icon,
// //         background,
// //       });
// //       return board;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // //POST  id columns

// // export const addTask = createAsyncThunk(
// //   'boards/addTask',
// //   async ({ _id, body }, thunkAPI) => {
// //     try {
// //       const response = await axios.post(`/columns/${_id}/tasks`, { ...body });
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // // POST columns

// // export const addColumn = createAsyncThunk(
// //   'boards/addColumn',
// //   async (body, thunkAPI) => {
// //     try {
// //       const response = await axios.post('/columns', { ...body });
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // //PATCH id columns
// // export const updateColumnTitle = createAsyncThunk(
// //   'boards/updateColumnTitle',
// //   async (column, thunkAPI) => {
// //     const { _id, title } = column;
// //     try {
// //       await axios.patch(`/columns/${_id}`, {
// //         title,
// //       });
// //       return column;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // // * DELETE id  columns
// // export const deleteColumn = createAsyncThunk(
// //   'boards/deleteColumn',
// //   async (_id, thunkAPI) => {
// //     try {
// //       await axios.delete(`/columns/${_id}`);
// //       return _id;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // //  PUT id  columns
// // export const updateTask = createAsyncThunk(
// //   'task/updateTask',
// //   async (task, thunkAPI) => {
// //     const { _id, title, description, deadline, priority, column } = task;
// //     try {
// //       await axios.put(`/tasks/${_id}`, {
// //         title,
// //         description,
// //         deadline,
// //         priority,
// //         column,
// //       });
// //       return task;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // //PATCH id
// // export const updateTaskPlace = createAsyncThunk(
// //   'tasks/updateTaskPlace',
// //   async ({ task, oldColumn }, thunkAPI) => {
// //     const { _id, column } = task;
// //     try {
// //       axios.patch(`/tasks/${_id}`, {
// //         column,
// //       });
// //       return { task, oldColumn };
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // //DELETE id

// // export const deleteTask = createAsyncThunk(
// //   'boards/deleteTask',
// //   async (task, thunkAPI) => {
// //     const { _id } = task;
// //     try {
// //       await axios.delete(`/tasks/${_id}`);
// //       return task;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

