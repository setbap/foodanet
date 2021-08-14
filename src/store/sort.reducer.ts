import { FilterStatus, SortStatus } from "@myutils/repo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = { status: SortStatus.rating };

export const sortStatusSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeSortItem: (state, action: PayloadAction<SortStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { changeSortItem } = sortStatusSlice.actions;

export const selectSortStatus = (state: RootState) => state.sortReducer.status;

export default sortStatusSlice.reducer;
