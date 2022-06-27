import { configureStore } from '@reduxjs/toolkit';
import filter from './filtersSlise';

export const store = configureStore({
  reducer: {
    filter,
  },
});
