import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './MessageSlice.jsx';

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
