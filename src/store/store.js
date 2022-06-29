import { configureStore } from '@reduxjs/toolkit';
import filter from './filtersSlise';
import cartSlise from './cartSlise';

export const store = configureStore({
  reducer: {
    filter,
    cartSlise,
  },
});
