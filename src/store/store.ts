import { configureStore } from '@reduxjs/toolkit';
import filter from './filtersSlise';
import cart from './cartSlise';
import rolls from './rollsSlise';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    rolls,
  },
});

export type RotState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
