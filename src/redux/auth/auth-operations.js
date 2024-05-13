import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupRequest,
  loginRequest,
  currentRequest,
  logoutRequest,
  refreshRequest,
  googleLogin,
  updateProfileRequest,
} from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signupRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.accessToken) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await refreshRequest(auth.refreshToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const googleLog = createAsyncThunk(
  'auth/googleLogin',
  async (body, { rejectWithValue, getState }) => {
    try {
      const data = await googleLogin(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/update',
  async (formData, { rejectWithValue }) => {
    try {
      await thunkAPI.dispatch(current());

      const data = await updateProfileRequest(formData);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
