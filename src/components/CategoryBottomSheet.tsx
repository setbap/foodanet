import React, { useCallback, useMemo, useRef, useState } from "react";

import { Dimensions, TouchableWithoutFeedback, Image } from "react-native";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { Box, Text } from "@my-style/index";
import { getCategories } from "@myutils/repo";
import { CategoryList } from "./CategoryList";

const categories = getCategories();
export const useCategoryBottomSheet = () => {
  const [openedCategory, setOpenedCategory] = useState(1);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["99%", "100%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handlePresentModalPressClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const CategoryBottomSheet = () => (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      handleComponent={() => <></>}
      // onChange={handleSheetChanges}
      backgroundComponent={() => <Box backgroundColor="transparent" />}
      backdropComponent={() => (
        <Box
          backgroundColor="transparent"
          flexDirection="row-reverse"
          justifyContent="center"
          opacity={0}
        />
      )}
    >
      <Box
        height={Dimensions.get("screen").height}
        backgroundColor="transparent"
        zIndex={100}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1, height: Dimensions.get("screen").height }}
          onPress={() => {
            handlePresentModalPressClose();
          }}
        >
          <Box flex={1} backgroundColor="grayTransparent" />
        </TouchableWithoutFeedback>
        <Box
          borderTopEndRadius={32}
          borderTopStartRadius={32}
          pb="l"
          width={Dimensions.get("screen").width}
          height={400}
          backgroundColor="cardPrimaryBackground"
        >
          <Box
            pt="s"
            ps="m"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="subheader">دسته بندی ها</Text>
            <TouchableOpacity>
              <Text variant="body" color="activeTabLine">
                حذف همه فیلتر
              </Text>
            </TouchableOpacity>
          </Box>
          <Box mb="m" />
          <BottomSheetScrollView>
            <CategoryList />
          </BottomSheetScrollView>
          <Box mb="l" />
        </Box>
      </Box>
    </BottomSheetModal>
  );

  return {
    CategoryBottomSheet,
    handlePresentModalPress,
    handlePresentModalPressClose,
  };
};

const Divider = () => (
  <Box
    width={Dimensions.get("window").width - 32}
    my={"xs"}
    height={1}
    backgroundColor="grayTransparent"
  />
);
