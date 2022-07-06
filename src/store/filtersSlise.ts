import { createSlice } from '@reduxjs/toolkit';

interface Sort {
  name: string;
  sortProperty: string;
}

interface filterState {
  categoryId: number;
  sort: Sort;
}

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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlise.actions;

export default filterSlise.reducer;
