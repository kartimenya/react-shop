import { createSlice } from '@reduxjs/toolkit';
import { RotState } from './store';

interface CartItem {
  id: number;
  name: string;
  price: number;
  count: number;
}

interface CartSliseState {
  totalPrise: number;
  items: CartItem[];
}
const initialState: CartSliseState = {
  totalPrise: 0,
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
    },
  },
});

export const selectCurt = (state: RotState) => state.cart;

export const { addProduct } = cartSlise.actions;
export default cartSlise.reducer;
