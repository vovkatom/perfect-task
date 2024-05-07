import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import { current, login, signup, logout } from './auth-operations';

const initialState = {
  user: {}, //"name" & "email"
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, pending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, rejected)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, rejected)
      .addCase(current.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, (state) => {
        state.isLoading = false;
        state.token = '';
      })
      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, (state) => {
        state.user = {};
        state.token = '';
        state.isLogin = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, rejected);
  },
});

export default authSlice.reducer;
