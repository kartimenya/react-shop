import { configureStore } from '@reduxjs/toolkit';
import filter from './slises/filtersSlise';
import cart from './slises/cartSlise';
import rolls from './slises/rollsSlise';
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
