import { Categories } from "@my-types/index";
import { getCategories } from "@myutils/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export const ALL_CATEGORY: Categories = {
  image: "",
  title: "دسته",
  value: -1,
};

const initialState: {
  categories: Categories[];
  selectedCategory: Categories;
} = { categories: getCategories(), selectedCategory: ALL_CATEGORY };

export const categoryStatusSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<Categories>) => {
      state.selectedCategory = action.payload;
    },
    unSelectCategory: (state) => {
      state.selectedCategory = ALL_CATEGORY;
    },
  },
});

export const { selectCategory, unSelectCategory } = categoryStatusSlice.actions;

export const selectAllcategory = (state: RootState) =>
  state.categoryReducer.categories;
export const selectSelectedcategory = (state: RootState) =>
  state.categoryReducer.selectedCategory;

export const selectCategoryReducer = (state: RootState) =>
  state.categoryReducer;

export default categoryStatusSlice.reducer;
