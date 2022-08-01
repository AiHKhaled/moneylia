import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ExtractScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Extract is coming soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Rubik_400Regular",
  },
});
