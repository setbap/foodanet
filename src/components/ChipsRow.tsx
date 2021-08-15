import React from "react";
import { Dimensions, Platform, ScrollView, UIManager } from "react-native";
import { useAppSelector } from "store/hooks";
import SelectedChips from "./selectedChips";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { repoKeyToPresian } from "@myutils/repo";
import { Box } from "@my-style/index";
import { changeFilterItem, selectAllFilterStatus } from "store/filter.reducer";
import { selectSelectedcategory } from "store/category.reducer";
import { useAppDispatch } from "store/store";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
      <ScrollView
        contentContainerStyle={{
          minWidth: Dimensions.get("window").width,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Box width={16} />
        <SelectedChips
          title={
            categoryStatus.value <= 0
              ? "همه دسته ها "
              : categoryStatus.sub
              ? `همه ${categoryStatus.title} ها`
              : categoryStatus.title
          }
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
                isFill={true}
                icon={<AntDesign name="closecircleo" size={16} color="white" />}
                onPress={() => {
                  // @ts-ignore
                  dispatch(changeFilterItem(item));
                }}
              />
            );
          })}
        <Box width={16} />
      </ScrollView>
    </Box>
  );
};

export default ChipsRow;
