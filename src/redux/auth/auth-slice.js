import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import {
  current,
  login,
  signup,
  logout,
  // refresh,
  googleLog,
  updateProfile,
  refreshAndFetchCurrent
} from './auth-operations';
import { Notify } from 'notiflix';

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
      .addCase(refreshAndFetchCurrent.pending, pending)
      .addCase(refreshAndFetchCurrent.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshAndFetchCurrent.rejected, (state) => {
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
      .addCase(googleLog.rejected, rejected)
      .addCase(updateProfile.pending, pending)
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        Notify.success('Profile updated successfully');
        state.isUpdate = true;
        state.isMessageSend = false;
        state.error = null;
      })
    
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.error=payload
        state.isUpdate = true;
        state.isLoading = false;
        Notify.failure('Server error. Please try again.');
        state.isMessageSend = false;
        
      });

  },
});

export default authSlice.reducer;
