import { configureStore } from '@reduxjs/toolkit';
import roll from './roll/rollSlise';
import filter from './filter/filterSlise';
import cart from './cart/cartSlise';

export const store = configureStore({
  reducer: { roll, filter, cart },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
