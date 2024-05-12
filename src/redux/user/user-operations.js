import { createAsyncThunk } from '@reduxjs/toolkit';
import { supportRequest } from '../../api/user-api';
// updateProfileRequest

export const support = createAsyncThunk(
  'user/support',
  async (body, { rejectWithValue }) => {
    try {
      const data = await supportRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// export const updateProfile = createAsyncThunk(
//   'user/update',
//   async (formData, thunkAPI) => {
//     try {
//       const data = await updateProfileRequest(formData);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
