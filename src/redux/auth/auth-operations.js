import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupRequest,
  loginRequest,
  supportRequest,
  currentRequest,
  logoutRequest,
  refreshRequest,
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

/*--------------------------------------------------------------------------------*/
export const support = createAsyncThunk(
  'auth/support',
  async (body, { rejectWithValue }) => {
    try {
      const data = await supportRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
/*--------------------------------------------------------------------------------*/

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
  async (body, { rejectWithValue }) => {
    try {
      const data = await refreshRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'users/update',
  async (formData, thunkAPI) => {
    try {
      const data = await updateProfileRequest(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
