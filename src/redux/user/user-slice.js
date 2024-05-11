import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import { support } from './user-operations';

const initialState = {
  isLogin: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(support.pending, pending)
      .addCase(support.fulfilled, (state) => {
        state.isLoading = false;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(support.rejected, rejected);
  },
});

export default userSlice.reducer;
