import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box, Text } from "@my-style/index";

import { RootStackParamList } from "@my-types/index";

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
