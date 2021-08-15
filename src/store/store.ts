import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterReducer from "./filter.reducer";
import sortReducer from "./sort.reducer";
import categoryReducer from "./category.reducer";

const store = configureStore({
  reducer: {
    filterReducer,
    sortReducer,
    categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;

export default store;
