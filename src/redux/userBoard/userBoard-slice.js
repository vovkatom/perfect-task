//slisce 
import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {

fetchRequestAllBoards,
addBoard,
editBoard,
deleteBoard,
fetchColumns,
addColumn,
editColumn,
deleteColumn,
addTaskRequest,
editTask,
deleteTaskById
} from './boards-operations';

import { pending, rejected } from '../../redux/userBoard/slice-function';
// import { pending, rejected } from '../../slice-function';







const initialState = {
  items: [],
  isLoading: false,
  error: null,
};


const BoardSlice = createSlice({
  name: 'boards',

  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchrequestBoardById.pending, pending)
      .addCase(fetchrequestBoardById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchRequestAllBoards.rejected, rejected)

      .addCase(addBoard.pending, pending)
      .addCase(addBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        Notiflix.Notify.success(
          `Dashboard with title ${payload.title} has been added`
        );
      })

      .addCase(addBoard.rejected, rejected)

      .addCase(editBoard.pending, pending)
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const itemId = state.items.findIndex(
          item => item._id === payload._id
        );
        if (itemId !== -1) {
          const updatedItem = { ...state.items[itemId], ...payload };
          state.items.splice(itemId, 1, updatedItem);
          Notiflix.Notify.success(
            `Dashboard with title ${payload.title} has beened updated`
          );
        }
      })
      .addCase(editBoard.rejected, rejected)

      .addCase(deleteBoard.pending, pending)
      .addCase(deleteBoard.fulfilled, (state, { payload }) => {

        state.isLoading = false;
        const deleteObject = state.items.findIndex(
          item => item._id === payload
        );
        if (deleteObject !== -1) {
          const deletedItem = state.items[deleteObject];
          state.items.splice(deleteObject, 1);
          Notiflix.Notify.success(
            `Dashboard with title ${deletedItem.title} had been deleted`
          );
        }
      })

      .addCase(deleteBoard.rejected, rejected);
  },
});

export default BoardSlice.reducer;



const initialStateColumn = {
  items: [],
  isLoading: false,
  error: null,
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  extraReducers: builder => {
    builder
.addCase(fetchColumns.pending, pending)
      .addCase(fetchColumns.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchColumns.rejected, rejected)

      
      .addCase(addColumn.pending, pending)
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        Notiflix.Notify.success(
          `Column with title ${payload.title} has been add`
        );
      })
      .addCase(addColumn.rejected, rejected)

      .addCase(editColumn.pending, pending)
      .addCase(editColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const oldItemIdx = state.items.findIndex(
          item => item.id === payload.id
        );
        if (itemId !== -1) {
          const updatedItem = { ...state.items[itemId], ...payload };
          state.items.splice(itemId, 1, updatedItem);
          Notiflix.Notify.success(
            `Column with title ${payload.title} has been updated`
          );
        }
      })
      .addCase(editColumn.rejected, rejected)

      .addCase(deleteColumn.pending, pending)
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const deleteObject = state.items.findIndex(
          item => item.id === payload
        );
        if (deleteObject !== -1) {
          const deletedColumn = state.items[deleteObject];
          state.items.splice(deleteObject, 1);
          Notiflix.Notify.success(
            `Column with title ${deletedColumn.title} has been deleted`
          );
        }
      })
      .addCase(deleteColumn.rejected, rejected);
  },
});

export default columnSlice.reducer;



const initialStateTask = {
  items: [],
  isLoading: false,
  error: null,
};

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addTaskRequest.pending, pending)
      .addCase(addTaskRequest.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.unshift(payload);
        Notiflix.Notify.success(
          `Task with title ${payload.title} has been added`
        );
      })
      .addCase(addTaskRequest.rejected, rejected)

      .addCase(editTask.pending, pending)
      .addCase(editTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const itemId = state.items.findIndex(
          item => item._id === payload._id
        );
        if (itemId!== -1) {
          const updatedItem = { ...state.items[itemId], ...payload };
          state.items.splice(itemId, 1, updatedItem);
          Notiflix.Notify.success(
            `Task with title ${payload.title} has been updated`
          );
        }
      })
      .addCase(editTask.rejected, rejected)

      .addCase(deleteTaskById.pending, pending)
      .addCase(deleteTaskById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const deleteObject = state.items.findIndex(
          item => item._id === payload
        );
        if (deleteObject !== -1) {
          const deletedItem = state.items[deleteObject];
          state.items.splice(deleteObject, 1);
          Notiflix.Notify.success(
            `Task with title ${deletedItem.title} has been deleted`
          );
        }
      })
      .addCase(deleteTaskById.rejected, rejected);
  },
});

export default TaskSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// import {
//   fetchrequestAllBoards,
//   fetchrequestBoardById,
//   addDashboard,
//   editDashboard,
//   deleteDashboard,
// } from '../../redux/userBoard/userBoard-operations.js'
// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.error = action.payload;
//   state.isLoading = false;
// };

// const boardsSlice = createSlice({
//   name: 'boards',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//     currentBoard: null,
//     filter: null,
//   },
//   reducers: {
//     selectBoard(state, action) {
//       state.currentBoard = action.payload;
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//     dragAndDropTask: (state, action) => {
//       const { destination, source } = action.payload;

//       const columnIndex = state.items[state.currentBoard].columns.findIndex(
//         (column) => column._id === source.droppableId
//       );

//       const task =
//         state.items[state.currentBoard].columns[columnIndex].tasks[
//           source.index
//         ];
//       task.column = destination.droppableId;

//       const newColumnIndex = state.items[state.currentBoard].columns.findIndex(
//         (column) => column._id === destination.droppableId
//       );

//       state.items[state.currentBoard].columns[columnIndex].tasks.splice(
//         source.index,
//         1
//       );

//       state.items[state.currentBoard].columns[newColumnIndex].tasks.splice(
//         destination.index,
//         0,
//         task
//       );
//     },
//     dragAndDropColumn: (state, action) => {
//       const { destination, source, draggableId } = action.payload;

//       const column = state.items[state.currentBoard].columns.find(
//         (column) => column._id === draggableId
//       );

//       state.items[state.currentBoard].columns.splice(source.index, 1);

//       state.items[state.currentBoard].columns.splice(
//         destination.index,
//         0,
//         column
//       );
//     },
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchBoards.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchBoards.pending, handlePending)
//       .addCase(fetchBoards.rejected, handleRejected)
//       .addCase(addBoard.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push({ ...action.payload, columns: [] });
//       })
//       .addCase(addBoard.pending, handlePending)
//       .addCase(addBoard.rejected, handleRejected)
//       .addCase(updateBoardById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (board) => board._id === action.payload._id
//         );

//         state.items[index] = action.payload;
//       })
//       .addCase(updateBoardById.pending, handlePending)
//       .addCase(updateBoardById.rejected, handleRejected)
//       .addCase(updateBoardById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (board) => board._id === action.payload._id
//         );

//         state.items[index].background = action.payload.background;
//       })
//       .addCase(updateBoardPatchById.pending, handlePending)
//       .addCase(updateBoardPatchById.rejected, handleRejected)
//       .addCase(deleteBoard.pending, handlePending)
//       .addCase(deleteBoard.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (board) => board._id === action.payload
//         );
//         state.items.splice(index, 1);
//         if (state.items.length === 0) {
//           state.currentBoard = null;
//         } else {
//           state.currentBoard = 0;
//         }
//       })
//       .addCase(deleteBoard.rejected, handleRejected)
//       .addCase(addColumn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items[state.currentBoard].columns.push(action.payload);
//       })
//       .addCase(addColumn.pending, handlePending)
//       .addCase(addColumn.rejected, handleRejected)
//       .addCase(updateColumnTitle.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items[state.currentBoard].columns.findIndex(
//           (column) => column._id === action.payload._id
//         );

//         state.items[state.currentBoard].columns[index] = action.payload;
//       })
//       .addCase(updateColumnTitle.pending, handlePending)
//       .addCase(updateColumnTitle.rejected, handleRejected)
//       .addCase(deleteColumn.pending, handlePending)
//       .addCase(deleteColumn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items[state.currentBoard].columns.findIndex(
//           (column) => column._id === action.payload
//         );
//         state.items[state.currentBoard].columns.splice(index, 1);
//       })
//       .addCase(deleteColumn.rejected, handleRejected)
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;

//         const index = state.items[state.currentBoard].columns.findIndex(
//           (column) => column._id === action.payload.column
//         );

//         state.items[state.currentBoard].columns[index].tasks.push(
//           action.payload
//         );
//       })
//       .addCase(addTask.pending, handlePending)
//       .addCase(addTask.rejected, handleRejected)
//       .addCase(updateTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;

//         const columnIndex = state.items[state.currentBoard].columns.findIndex(
//           (column) => column._id === action.payload.column
//         );

//         const taskIndex = state.items[state.currentBoard].columns[
//           columnIndex
//         ].tasks.findIndex((task) => task._id === action.payload._id);

//         state.items[state.currentBoard].columns[columnIndex].tasks[taskIndex] =
//           action.payload;
//       })
//       .addCase(updateTask.pending, handlePending)
//       .addCase(updateTask.rejected, handleRejected)
//       .addCase(updateTaskPlace.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const { task, oldColumn } = action.payload;

//         const newColumnIndex = state.items[
//           state.currentBoard
//         ].columns.findIndex((column) => column._id === task.column);

//         state.items[state.currentBoard].columns[newColumnIndex].tasks.push(
//           task
//         );

//         const oldColumnIndex = state.items[
//           state.currentBoard
//         ].columns.findIndex((column) => column._id === oldColumn);

//         const oldTaskIndex = state.items[state.currentBoard].columns[
//           oldColumnIndex
//         ].tasks.findIndex((item) => item._id === task._id);

//         state.items[state.currentBoard].columns[oldColumnIndex].tasks.splice(
//           oldTaskIndex,
//           1
//         );
//       })
//       .addCase(updateTaskPlace.pending, handlePending)
//       .addCase(updateTaskPlace.rejected, handleRejected)
//       .addCase(deleteTask.pending, handlePending)
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;

//         const columnIndex = state.items[state.currentBoard].columns.findIndex(
//           (column) => column._id === action.payload.column
//         );

//         const taskIndex = state.items[state.currentBoard].columns[
//           columnIndex
//         ].tasks.findIndex((task) => task._id === action.payload._id);

//         state.items[state.currentBoard].columns[columnIndex].tasks.splice(
//           taskIndex,
//           1
//         );
//       })
//       .addCase(deleteTask.rejected, handleRejected),
// });

// export const { selectBoard, setFilter, dragAndDropTask, dragAndDropColumn } =
//   boardsSlice.actions;
// export const boardsReducer = boardsSlice.reducer;


// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: { filter: '' },
//   reducers: {
//     addFilter(state, { payload }) {
//       state.filter = payload;
//     },
//   },
// });

// export const filterReducer = filterSlice.reducer;

// export const { addFilter } = filterSlice.actions;

