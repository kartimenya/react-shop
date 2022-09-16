import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterState, SortType } from './types';

const initialState: filterState = {
  categoryId: 0,
  sort: {
    name: 'популярности (DESC)',
    sortProperty: 'prise',
  },
};

const filterSlise = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlise.actions;

export default filterSlise.reducer;
