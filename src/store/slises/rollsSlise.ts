import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRoll } from '../../types/IRoll';
import { RotState } from '../store';

export const fetchRolls = createAsyncThunk('rolls/fetchRolls', async (params: any) => {
  const { category, sortBy, order } = params;
  const { data } = await axios.get(
    `https://62b21363c7e53744afc73214.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

interface rollsSliseState {
  items: IRoll[];
  status: string;
}

const initialState: rollsSliseState = {
  items: [],
  status: 'loading',
};

const rollsSlise = createSlice({
  name: 'rolls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRolls.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchRolls.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchRolls.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const selectRolls = (state: RotState) => state.rolls;

export default rollsSlise.reducer;
