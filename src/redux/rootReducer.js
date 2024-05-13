import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import userReducer from './user/user-slice';
import { boardsReducer } from './userBoard/userBoard-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'user'],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  user: userReducer,
  boards: boardsReducer,
});

export default rootReducer;
