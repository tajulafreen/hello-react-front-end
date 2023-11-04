import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './features/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;