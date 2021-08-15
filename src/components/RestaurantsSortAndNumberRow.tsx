import React from "react";
import { Box } from "@my-style/Box";
import { Text } from "@my-style/Text";
import { TouchableHighlight } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { selectSortStatus } from "store/sort.reducer";
import { useSelector } from "react-redux";
import { SortStatus } from "@myutils/repo";

interface Props {
  count: number;
  sortOpenFn: VoidFunction;
}

const RestaurantsSortAndNumberRow = ({ count, sortOpenFn }: Props) => {
  const state = useSelector(selectSortStatus);
  let title = "به ترتیب...";
  switch (state) {
    case SortStatus.name:
      title = "به ترتیب الفبا";
      break;
    case SortStatus.rating:
      title = "بالاترین امتیاز";
      break;
  }
  return (
    <Box
      mx="m"
      mt="s"
      mb="xs"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text variant="subheader2">{`${count} رستوران`} </Text>
      <TouchableHighlight onPress={sortOpenFn}>
        <Box flexDirection="row">
          <FontAwesome5 name="sort-amount-up-alt" size={16} color="green" />
          <Box mr="xs" />
          <Text color="greenDark" variant="subheader3">
            {title}{" "}
          </Text>
        </Box>
      </TouchableHighlight>
    </Box>
  );
};

export default RestaurantsSortAndNumberRow;
