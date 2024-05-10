import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import {
  getBoardByID,
  deleteBoardByID,
  addBoard,
  updateBoard,
  getAllBoards,
} from '../userBoard/userBoard-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addBoard.pending, pending)
      .addCase(addBoard.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      }))
      .addCase(getAllBoards.pending, pending)
      .addCase(getAllBoards.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: payload,
      }))
      .addCase(getAllBoards.rejected, rejected)

      .addCase(getBoardByID.pending, pending)
      .addCase(getBoardByID.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: payload,
      }))
      .addCase(getBoardByID.rejected, rejected)

      .addCase(deleteBoardByID.pending, pending)
      .addCase(deleteBoardByID.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter((item) => item.id !== payload),
      }))
      .addCase(deleteBoardByID.rejected, rejected)

      .addCase(updateBoard.pending, pending)
      .addCase(updateBoard.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter((item) => item.id === payload),
      }));
  },
});

export default boardSlice.reducer;
