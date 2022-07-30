import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ChatIcon from "../../assets/icons/ChatIcon";
import { LogotipoIcon } from "../../assets/icons/LogotipoIcon";

type HeaderType = {
  bgColor?: string;
};

export const Header: React.FC<HeaderType> = ({ bgColor }: HeaderType) => {
  return (
    <>
      <StatusBar style="light" />
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <View style={styles.icons}>
          <LogotipoIcon />
          <ChatIcon />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 80,
    paddingHorizontal: 16,
    marginBottom: 50,
  },
});
