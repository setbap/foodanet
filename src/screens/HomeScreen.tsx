import React, { useRef, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Box, Text } from "@my-style/index";
import { getRestaurants } from "@myutils/repo";
import { RestaurantCard } from "@my-components/index";
import { useRatingBottomSheet } from "@my-components/SortingBottomSheet";
import { RectButton } from "react-native-gesture-handler";
import { useFilterBottomSheet } from "@my-components/FilterBottomSheet";
import { selectAllFilterStatus } from "store/filter.reducer";
import { selectSortStatus } from "store/sort.reducer";
import { useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { Restaurants } from "@my-types/index";

export default function HomeScreen() {
  const {
    SortingBottomSheet: RatingSortingBottomSheet,
    handlePresentModalPress: ratingHandlePresentModalPress,
  } = useRef(useRatingBottomSheet()).current;
  const {
    SortingBottomSheet: FilterSortingBottomSheet,
    handlePresentModalPress: filterHandlePresentModalPress,
  } = useRef(useFilterBottomSheet()).current;
  const sortValue = useAppSelector(selectSortStatus);
  const allFilterValue = useAppSelector(selectAllFilterStatus);
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

  useEffect(() => {
    setRestaurants(
      getRestaurants({ filterStatus: allFilterValue, sortingStatus: sortValue })
    );
    return () => {};
  }, [sortValue, allFilterValue]);

  console.log("whatttt");

  return (
    <Box flex={1}>
      <RatingSortingBottomSheet />
      <FilterSortingBottomSheet />
      <Box height={60}>
        <RectButton
          onPress={() => {
            ratingHandlePresentModalPress();
          }}
        >
          <Text>ads</Text>
        </RectButton>
      </Box>
      <Box height={60}>
        <RectButton
          onPress={() => {
            filterHandlePresentModalPress();
          }}
        >
          <Text>aaaaaadddaaaaa</Text>
        </RectButton>
      </Box>
      <FlatList
        data={getRestaurants({
          sortingStatus: sortValue,
          filterStatus: allFilterValue,
        })}
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
