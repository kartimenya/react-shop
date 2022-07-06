import { configureStore } from '@reduxjs/toolkit';
import filter from './filtersSlise';
import cart from './cartSlise';

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});

export type RotState = ReturnType<typeof store.getState>;
