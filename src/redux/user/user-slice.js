import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import { support, updateProfile } from './user-operations';

const initialState = {
  isLoading: false,
  isUpdate: false,
  isMessageSend: false,
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
        state.isUpdate = false;
        state.isMessageSend = true;
        state.error = null;
      })
      .addCase(support.rejected, rejected)
      .addCase(updateProfile.pending, pending)
      .addCase(updateProfile.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
        state.isMessageSend = false;
        state.error = null;
      })
      .addCase(updateProfile.rejected, rejected);
  },
});

export default userSlice.reducer;
