import React from "react";
import { Box } from "@my-style/Box";
import { Dimensions, Image } from "react-native";
import { Text } from "@my-style/Text";

const AboutScreen = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Image
        style={{
          height: width / 4,
          aspectRatio: 618 / 200,
        }}
        source={require("../../assets/images/yektanet.png")}
      />
      <Text variant="header"></Text>
      <Text variant="header3" numberOfLines={1} mx="m" adjustsFontSizeToFit>
        سینا ابراهیمی - مصاحبه ی عملی یکتانت
      </Text>
      <Box height={32} />
      <Text
        color="textComment"
        fontFamily="vazir_bold"
        fontWeight="bold"
        variant="subheader3"
      >
        موقعیت شغلی:
      </Text>
      <Text variant="subheader3">
        Front-end Developer (React & React Native)
      </Text>
      <Box height={32} />
      <Text color="textComment" variant="body">
        مرداد 1400
      </Text>
      <Box height={72} />
    </Box>
  );
};

export default AboutScreen;
