import React, { useCallback, useMemo, useRef, useState } from "react";
import { Dimensions, TouchableWithoutFeedback, Switch } from "react-native";
import { BottomSheetModal, TouchableOpacity } from "@gorhom/bottom-sheet";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, Text } from "@my-style/index";
import { FilterStatus } from "@myutils/repo";
import {
  changeFilterItem,
  clearAllFilters,
  selectFilterStatus,
} from "store/filter.reducer";
import { useAppSelector } from "store/hooks";
import { useAppDispatch } from "store/store";

export const useFilterBottomSheet = () => {
  const dispatch = useAppDispatch();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["99%", "100%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handlePresentModalPressClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const SortingBottomSheet = () => (
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
          px="m"
          pb="l"
          width={Dimensions.get("screen").width}
          height={360}
          backgroundColor="cardPrimaryBackground"
        >
          <Box
            pt="s"
            ps="m"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="subheader">فیلترها</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(clearAllFilters());
              }}
            >
              <Text variant="body" color="activeTabLine">
                حذف همه فیلتر ها
              </Text>
            </TouchableOpacity>
          </Box>
          <Box mb="m" />
          <SwitchItemButton item="hasCoupen" title={"دارای کوپن"} />
          <Divider />
          <SwitchItemButton
            item="hasDiscountValueForView"
            title={"دارای تخفیف"}
          />
          <Divider />
          <SwitchItemButton item="isEconomical" title={"رستوران به صرفه"} />
          <Divider />
          <SwitchItemButton item="isDeliveryFree" title={"ارسال رایگان"} />
          <Divider />
          <SwitchItemButton item="isExpress" title={"اسنپ اکسپرس"} />
        </Box>
      </Box>
    </BottomSheetModal>
  );

  return {
    SortingBottomSheet,
    handlePresentModalPress,
    handlePresentModalPressClose,
  };
};

const SwitchItemButton = ({
  item,
  title,
}: {
  item: keyof FilterStatus;
  title: string;
}) => {
  const filterItemValue = useAppSelector((state) =>
    selectFilterStatus(state, item)
  );
  const dispatch = useAppDispatch();
  return (
    <Box
      borderRadius={8}
      overflow="hidden"
      flexDirection="row"
      pl="s"
      justifyContent="space-between"
      alignItems="center"
      height={32}
      width={Dimensions.get("window").width - 32}
    >
      <Text variant="subheader3">{title}</Text>
      <Switch
        value={filterItemValue}
        onChange={(e) => {
          dispatch(changeFilterItem(item));
          return;
        }}
      />
    </Box>
  );
};

const Divider = () => (
  <Box
    width={Dimensions.get("window").width - 32}
    my={"s"}
    height={1}
    backgroundColor="grayTransparent"
  />
);
