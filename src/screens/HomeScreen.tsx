import React, { useRef, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Box } from "@my-style/index";
import { getRestaurants } from "@myutils/repo";
import { RestaurantCard } from "@my-components/index";
import { useRatingBottomSheet } from "@my-components/SortingBottomSheet";

import { useFilterBottomSheet } from "@my-components/FilterBottomSheet";
import { selectAllFilterStatus } from "store/filter.reducer";
import { selectSortStatus } from "store/sort.reducer";
import { useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { Restaurants } from "@my-types/index";
import { useCategoryBottomSheet } from "@my-components/CategoryBottomSheet";
import { selectSelectedcategory } from "store/category.reducer";
import ChipsRow from "@my-components/ChipsRow";
import RestaurantsSortAndNumberRow from "@my-components/RestaurantsSortAndNumberRow";

export default function HomeScreen() {
  const {
    SortingBottomSheet: RatingSortingBottomSheet,
    handlePresentModalPress: ratingHandlePresentModalPress,
  } = useRef(useRatingBottomSheet()).current;
  const {
    SortingBottomSheet: FilterSortingBottomSheet,
    handlePresentModalPress: filterHandlePresentModalPress,
  } = useRef(useFilterBottomSheet()).current;
  const {
    CategoryBottomSheet,
    handlePresentModalPress: categoryHandlePresentModalPress,
  } = useRef(useCategoryBottomSheet()).current;
  const sortValue = useAppSelector(selectSortStatus);
  const allFilterValue = useAppSelector(selectAllFilterStatus);
  const selectedcategory = useAppSelector(selectSelectedcategory);
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

  useEffect(() => {
    setRestaurants(
      getRestaurants({
        filterStatus: allFilterValue,
        sortingStatus: sortValue,
        categoryValue: selectedcategory?.value,
      })
    );
    return () => {};
  }, [sortValue, allFilterValue, selectedcategory]);

  return (
    <Box flex={1}>
      <ChipsRow
        openCategoryFn={categoryHandlePresentModalPress}
        openFilterFn={filterHandlePresentModalPress}
      />
      <RestaurantsSortAndNumberRow
        count={restaurants.length}
        sortOpenFn={ratingHandlePresentModalPress}
      />
      <RatingSortingBottomSheet />
      <FilterSortingBottomSheet />
      <CategoryBottomSheet />
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id + ""}
        renderItem={(item) => <RestaurantCard data={item.item} />}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
