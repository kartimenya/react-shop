import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRolls = createAsyncThunk(
  'rolls/fetchRolls',
  async (params: any, thunkAPI: any) => {
    const { category, sortBy, order } = params;
    const { data } = await axios.get(
      `https://62b21363c7e53744afc73214.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
};

const rollsSlise = createSlice({
  name: 'rolls',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRolls.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchRolls.pending, (state, action) => {});
    builder.addCase(fetchRolls.rejected, (state, action) => {});
  },
});

export const { setItems } = rollsSlise.actions;

export default rollsSlise.reducer;
