import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { useAppSelector } from "store/hooks";
import SelectedChips from "./selectedChips";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { repoKeyToPresian } from "@myutils/repo";
import { Box } from "@my-style/Box";
import { changeFilterItem, selectAllFilterStatus } from "store/filter.reducer";
import { selectSelectedcategory } from "store/category.reducer";
import { useAppDispatch } from "store/store";

interface Props {
  openFilterFn: VoidFunction;
  openCategoryFn: VoidFunction;
}

export const ChipsRow = ({ openCategoryFn, openFilterFn }: Props) => {
  const filterStatus = useAppSelector(selectAllFilterStatus);
  const categoryStatus = useAppSelector(selectSelectedcategory);
  const dispatch = useAppDispatch();

  return (
    <Box width={Dimensions.get("window").width} height={32} my="s">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SelectedChips
          title={categoryStatus.value > 0 ? categoryStatus.title : "دسته ها"}
          onPress={() => {
            openCategoryFn();
          }}
          icon={<Ionicons name="md-grid-outline" size={20} color="green" />}
        />

        <SelectedChips
          title={"فیلتر ها"}
          onPress={() => {
            openFilterFn();
          }}
          icon={<AntDesign name="filter" size={20} color="green" />}
        />
        {Object.keys(filterStatus)
          // @ts-ignore
          .filter((item) => filterStatus[item])
          .map((item) => {
            return (
              <SelectedChips
                key={item}
                // @ts-ignore
                title={repoKeyToPresian(item)}
                onPress={() => {
                  // @ts-ignore
                  dispatch(changeFilterItem(item));
                }}
              />
            );
          })}
        <Box width={8} />
      </ScrollView>
    </Box>
  );
};

export default ChipsRow;
