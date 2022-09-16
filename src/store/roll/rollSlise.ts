import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRoll } from '../../models';
import { rollState } from './types';

export const fetchRolls = createAsyncThunk('rolls/fetchRolls', async (params: any) => {
  const { category, sortBy, order } = params;
  const { data } = await axios.get(
    `https://62b21363c7e53744afc73214.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

const initialState: rollState = {
  rolls: [],
  loading: 'loading',
};

const rollSlise = createSlice({
  name: 'roll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRolls.pending, (state) => {
      state.loading = 'loading';
      state.rolls = [];
    });
    builder.addCase(fetchRolls.fulfilled, (state, action: PayloadAction<IRoll[]>) => {
      state.loading = 'succeeded';
      state.rolls = action.payload;
    });
    builder.addCase(fetchRolls.rejected, (state) => {
      state.loading = 'error';
      state.rolls = [];
    });
  },
});

export default rollSlise.reducer;
