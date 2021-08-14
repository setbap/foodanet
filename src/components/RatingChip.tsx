import React from "react";
import { Box, Text } from "@my-style/index";
import { AntDesign } from "@expo/vector-icons";
import { interpolateColor } from "react-native-reanimated";
import { View, StyleSheet } from "react-native";

interface Props {
  rating: number;
}

export const RatingChip = ({ rating }: Props) => {
  const color = interpolateColor(
    rating,
    [0, 2.999, 3, 5],
    ["red", "#ffc14d", "#a9cf3a", "green"],
    "RGB"
  ).toString();
  const fixed = rating.toPrecision(1);
  return (
    <Box
      overflow="hidden"
      flexDirection="row"
      width={48}
      height={20}
      pb="xs"
      justifyContent="center"
      alignItems="stretch"
      borderRadius={16}
      style={{ borderRadius: 6 }}
    >
      <Text fontSize={13} lineHeight={20} variant="comment">
        {(Math.round(rating * 100) / 100).toFixed(2)}
      </Text>
      <Box width={3} />
      <Box pt="xs">
        <AntDesign name="star" size={12} color={color} />
      </Box>

      {/* this view for background color */}
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: color.toString(),
          opacity: 0.1,
        }}
      />
    </Box>
  );
};

export default RatingChip;
