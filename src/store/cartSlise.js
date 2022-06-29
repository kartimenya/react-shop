import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrise: 0,
  items: [],
};

const cartSlise = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlise.actions;
export default cartSlise.reducer;
