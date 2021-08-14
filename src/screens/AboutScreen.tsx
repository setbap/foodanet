import { StyleSheet } from "react-native";
import { Box, Text } from "@my-style/index";
import * as React from "react";
export default function TabTwoScreen() {
  return (
    <Box>
      <Text variant="header">صفحه درباره من</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
