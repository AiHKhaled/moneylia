import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { ArrowLeftIcon } from "../assets/icons/ArrowLeftIcon";

type HeaderType = {
  BackHandler: () => void;
};

export const PaymentHeader: React.FC<HeaderType> = ({
  BackHandler,
}: HeaderType) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Pressable onPress={BackHandler}>
            <ArrowLeftIcon />
          </Pressable>
          <Text style={styles.paymentText}> Payment details</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "#BF7EE6",
    width: "100%",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 70,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  paymentText: {
    fontFamily: "WorkSans_400Regular",
    color: "#FFF",
    fontSize: 16,
    marginLeft: 105,
  },
});
