import React, { FC } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  LayoutAnimation,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
  UIManager,
} from "react-native";
import { Box, Text } from "@my-style/index";
import { Categories } from "@my-types/index";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  ALL_CATEGORY,
  selectCategory,
  selectCategoryReducer,
} from "store/category.reducer";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function CategoryList() {
  const dispatch = useAppDispatch();
  const { categories, selectedCategory } = useAppSelector(
    selectCategoryReducer
  );
  const [openCategory, setOpenCategory] = useState<Categories | null>(null);

  const setSelectedCategory = (item: Categories) => {
    dispatch(selectCategory(item));
  };

  const onParentItemSelect = (item: Categories) => {
    if (item.sub != null) {
      if (item.value === openCategory?.value) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpenCategory(null);
      } else {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpenCategory(item);
      }
    } else {
      setSelectedCategory(item);
    }
  };

  const onChildItemSelect = (item: Categories) => {
    setSelectedCategory(item);
  };

  return (
    <>
      <CategoryItem
        isSelected={selectedCategory?.value === ALL_CATEGORY.value}
        onPress={() => onParentItemSelect(ALL_CATEGORY)}
        item={ALL_CATEGORY}
        isHeader
      />
      {categories.map((item, index) => (
        <Box key={item.value}>
          <CategoryItem
            isSelected={selectedCategory?.value === item.value && !item.sub}
            onPress={() => onParentItemSelect(item)}
            isOpen={openCategory?.value === item.value}
            item={item}
          />
          {item.sub != null && item.value === openCategory?.value && (
            <Box me={"s"}>
              <Box>
                <CategoryItem
                  isHeader
                  isSelected={selectedCategory?.value === item.value}
                  onPress={() => onChildItemSelect(item)}
                  item={item}
                />
              </Box>
              {item.sub!.map((subItem) => (
                <Box key={subItem.value}>
                  <CategoryItem
                    isSelected={selectedCategory?.value === subItem.value}
                    onPress={() => onChildItemSelect(subItem)}
                    item={subItem}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}

const CategoryItem: FC<{
  item: Categories;
  onPress: VoidFunction;
  isSelected: boolean;

  isHeader?: boolean;
  isOpen?: boolean;
}> = ({ item, onPress, isSelected, isHeader = false, isOpen = false }) => {
  return (
    <TouchableOpacity onPress={onPress} key={item.value}>
      <Divider />
      <Box
        flexDirection="row"
        height={40}
        px="m"
        mb="xs"
        alignItems="center"
        width={Dimensions.get("window").width}
      >
        {isHeader ? (
          <Box height={32} mt="s" ps="xs" width={32}>
            <Ionicons
              style={{ marginRight: 2 }}
              name="md-grid-outline"
              size={24}
            />
          </Box>
        ) : (
          <Image
            style={{
              height: 32,
              width: 32,
            }}
            source={{ uri: item.image }}
          />
        )}
        <Box mx="xs" mt="xs" />
        <Text variant="body" color={isSelected ? "activeTabLine" : "textColor"}>
          {isHeader ? `همه ${item.title} ها` : item.title}
        </Text>

        {(isHeader || !item.sub?.length) && (
          <Box position="absolute" right={18}>
            <FontAwesome
              name={isSelected ? "check-circle-o" : "circle-o"}
              size={20}
              color={isSelected ? "green" : "gray"}
            />
          </Box>
        )}
        {!isHeader && item.sub?.length && (
          <Box position="absolute" right={18}>
            <FontAwesome
              name={isOpen ? "angle-down" : "angle-left"}
              size={20}
              color={isOpen ? "green" : "gray"}
            />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

const Divider = () => (
  <Box
    width={Dimensions.get("window").width - 32}
    my={"xs"}
    height={1}
    backgroundColor="grayTransparent"
  />
);
