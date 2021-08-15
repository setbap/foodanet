import { FilterStatus } from "@myutils/repo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutAnimation } from "react-native";
import { RootState } from "./store";

const initialState: FilterStatus = {
  hasCoupen: false,
  hasDiscountValueForView: false,
  isDeliveryFree: false,
  isEconomical: false,
  isExpress: false,
};

export const filterStatusSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterItem: (state, action: PayloadAction<keyof FilterStatus>) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      state[action.payload] = !state[action.payload];
    },
    clearAllFilters: (state) => {
      state.hasCoupen = initialState.hasCoupen;
      state.hasDiscountValueForView = initialState.hasDiscountValueForView;
      state.isDeliveryFree = initialState.isDeliveryFree;
      state.isEconomical = initialState.isEconomical;
      state.isExpress = initialState.isExpress;
    },
  },
});

export const { changeFilterItem, clearAllFilters } = filterStatusSlice.actions;

export const selectFilterStatus = (
  state: RootState,
  item: keyof FilterStatus
) => state.filterReducer[item];

export const selectAllFilterStatus = (state: RootState) => state.filterReducer;

export default filterStatusSlice.reducer;
