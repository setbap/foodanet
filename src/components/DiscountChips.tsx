import { Text, Box } from "@my-style/index";
import React from "react";

interface Props {
  discountValueForView: number;
}

const DiscountChips = ({ discountValueForView }: Props) => {
  return (
    <Box
      position="absolute"
      zIndex={3}
      top={8}
      left={-8}
      borderRadius={4}
      height={20}
      backgroundColor="discount"
      width={28}
      p="xs"
    >
      <Text textAlign="center" variant="comment" color="cardPrimaryBackground">
        {"%"}
        {discountValueForView}
      </Text>
    </Box>
  );
};

export default DiscountChips;
