import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@my-style/Box";
import { Text } from "@my-style/Text";

interface Props {
  title: string;
  onPress: VoidFunction;
  icon?: JSX.Element;
  isFill?: boolean;
}

export const SelectedChips = ({ title, onPress, icon, isFill }: Props) => {
  return (
    <Box
      borderRadius={32}
      borderWidth={2}
      borderColor={isFill ? "cardPrimaryBackground" : "greenDark"}
      backgroundColor={isFill ? "greenDark" : "cardPrimaryBackground"}
      overflow="hidden"
      px="s"
      pt="xs"
      ms="s"
    >
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <>
          {icon}
          <Box m="xs"></Box>
          <Text
            mt="xs"
            variant="body"
            color={!isFill ? "greenDark" : "cardPrimaryBackground"}
          >
            {title}
          </Text>
        </>
      </TouchableOpacity>
    </Box>
  );
};

export default SelectedChips;
