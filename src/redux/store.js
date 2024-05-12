import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from './rootReducer';
// import { boardsReducer } from './boards/slice';

// const boardsPersistConfig = {
//   key: 'boards',
//   storage,
//   whitelist: ['items', 'currentBoard'],
// };


export const store = configureStore({
  reducer: rootReducer,
  // { boards: persistReducer(boardsPersistConfig, boardsReducer),}
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
