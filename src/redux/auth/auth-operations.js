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
      const { accessToken } = data;
      await currentRequest(accessToken);
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
  async (formData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      // await refreshRequest(auth.refreshToken);
      await currentRequest(auth.accessToken)
      console.log('uth.refreshToken:', auth.refreshToken)

      const data = await updateProfileRequest(formData);
      ;
      return data;
    } catch (error) {
      
      
      return rejectWithValue(error.response.data.message);
    }
  }
);



// export const refreshAndFetchCurrent = () => async (dispatch, { rejectWithValue, getState }) => {
//   try {
//     await dispatch(refresh());
//     const { auth } = getState();
//     await dispatch(current(auth.accessToken));
//   } catch (error) {
//     return rejectWithValue(error.response.data.message);
//   }
// };

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const refreshAndFetchCurrent = createAsyncThunk(
  'auth/refreshAndFetchCurrent',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      // await dispatch(refresh());
      const { auth } = getState();
      const data = await dispatch(current(auth.accessToken));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);