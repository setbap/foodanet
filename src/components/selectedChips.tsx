import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Box } from "@my-style/Box";
import { Text } from "@my-style/Text";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {
  title: string;
  onPress: VoidFunction;
  icon?: JSX.Element;
}

export const SelectedChips = ({ title, onPress, icon }: Props) => {
  return (
    <Box
      borderRadius={32}
      borderWidth={2}
      borderColor="greenDark"
      overflow="hidden"
      px="s"
      pt="xs"
      ms="s"
    >
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        {icon}
        <Box m="xs"></Box>
        <Text mt="xs" variant="body" color="greenDark">
          {title}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default SelectedChips;
