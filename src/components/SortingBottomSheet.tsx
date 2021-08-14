import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, Text } from "@my-style/index";
import { FilterStatus, SortStatus } from "@myutils/repo";
import { RectButton } from "react-native-gesture-handler";
import { FC } from "react";
import { useAppSelector } from "store/hooks";
import { selectFilterStatus } from "store/filter.reducer";
import { useAppDispatch } from "store/store";
import { changeSortItem, selectSortStatus } from "store/sort.reducer";

export const useRatingBottomSheet = () => {
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
          height={210}
          backgroundColor="cardPrimaryBackground"
        >
          <Box
            pt="s"
            ps="m"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text variant="subheader">به ترتیب ...</Text>
            <MaterialIcon
              name="close-circle-outline"
              size={20}
              onPress={() => {
                handlePresentModalPressClose();
              }}
            />
          </Box>
          <Box mb="m" />
          <ItemButton value={SortStatus.name} title={"بر اساس نام"} />
          <Box mb="ms" />
          <ItemButton value={SortStatus.rating} title={"بیشترین امتیاز"} />
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

const ItemButton = ({ title, value }: { value: SortStatus; title: string }) => {
  const sortValue = useAppSelector(selectSortStatus);
  const dispatch = useAppDispatch();
  return (
    <Box
      backgroundColor={
        value === sortValue ? "amberTransparent" : "cardPrimaryBackground"
      }
      borderRadius={8}
      overflow="hidden"
      height={40}
      width={Dimensions.get("window").width - 32}
    >
      <RectButton
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          paddingLeft: 16,
        }}
        onPress={() => dispatch(changeSortItem(value))}
      >
        <Text variant="subheader3">{title}</Text>
      </RectButton>
    </Box>
  );
};
