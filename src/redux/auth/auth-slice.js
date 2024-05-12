import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import {
  current,
  login,
  signup,
  logout,
  refresh,
  googleLog,
} from './auth-operations';

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
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
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, rejected)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, rejected)
      .addCase(current.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, (state) => {
        state.isLoading = false;
        state.accessToken = '';
        state.refreshToken = '';
        state.isLogin = false;
      })
      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, (state) => {
        state.user = {};
        state.accessToken = '';
        state.refreshToken = '';
        state.isLogin = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, rejected)
      .addCase(refresh.pending, pending)
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refresh.rejected, (state) => {
        state.isLoading = false;
        state.accessToken = '';
        state.refreshToken = '';
      })
      .addCase(googleLog.pending, pending)
      .addCase(googleLog.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(googleLog.rejected, rejected);
  },
});

export default authSlice.reducer;
