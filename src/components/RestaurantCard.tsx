import React from "react";
import { Box, Card, Text } from "@my-style/index";
import { Restaurants } from "@my-types/index";
import { Image, StyleSheet, Text as RNText } from "react-native";
import { useWindowDimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RatingChip from "./RatingChip";
import DiscountChips from "./DiscountChips";

interface Props {
  data: Restaurants;
}

export const RestaurantCard = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  return (
    <Card variant="elevated">
      {/* top header image */}
      <Box flexDirection="row">
        <Image
          style={{
            width: 96,
            height: 96,
            borderRadius: 16,
            resizeMode: "cover",
          }}
          source={{ uri: data.backgroundImage }}
        />
        {data.discountValueForView > 0 && (
          <DiscountChips discountValueForView={data.discountValueForView} />
        )}

        <Box
          p="s"
          ps="ms"
          width={dimensions.width - 100 - 48}
          justifyContent="space-evenly"
        >
          <Text variant="subheader2">{data.title}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" variant="comment">
            {data.description}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ overflow: "hidden" }}
            variant="comment"
          >
            {data.address.split("،")[0]}
          </Text>
        </Box>
      </Box>
      {/* end top header image */}

      {/* start delivery fee and comment row */}
      <Box
        pt="s"
        pb="xs"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row" ps="xs" alignItems="baseline">
          <MaterialIcons name="sports-motorsports" size={20} color="#a6a6a6" />
          <Box width={6} />
          {data.delivery_fee > 0 ? (
            <>
              <Text variant="body">{data.delivery_fee}</Text>
              <Text variant="body"> تومان</Text>
            </>
          ) : (
            <>
              <Text variant="body">رایگان </Text>
            </>
          )}
        </Box>
        <Box
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="row"
        >
          <Box pt="xs">
            <Text variant="comment">({data.commentCount})</Text>
          </Box>
          <Box mr="s" />
          <RatingChip rating={data.rating} />
        </Box>
      </Box>
      {/* end delivery fee and comment box */}
    </Card>
  );
};

export default RestaurantCard;
const style = StyleSheet.create({
  comment: {
    fontFamily: "vazir",
    fontSize: 13,
    lineHeight: 17,
    color: "#767676",
  },
});
