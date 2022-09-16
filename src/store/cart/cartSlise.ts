import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSliseState } from './type';

const initialState: CartSliseState = {
  totalPrise: 0,
  totalCount: 0,
  items: [],
};

const cartSlise = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrise = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    minusProduct(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }

      state.totalPrise = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrise = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
  },
});

export const { addProduct, minusProduct, removeProduct } = cartSlise.actions;
export default cartSlise.reducer;
