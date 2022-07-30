import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContributionTypes } from "../@types/ContributionTypes";

export const Contributions: React.FC<ContributionTypes> = ({
  type,
  amount,
  Icon,
}: ContributionTypes) => {
  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.typeStyle}>{type}</Text>
      <Text
        style={
          amount !== "Unavailable"
            ? styles.amountTextStyle
            : [styles.amountTextStyle, styles.unavailableAmountTextStyle]
        }
      >
        {amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 124,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
  typeStyle: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    color: "#83828E",
    marginTop: 4,
  },
  amountTextStyle: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
    color: "#3A3B7B",
    marginTop: 4,
  },
  unavailableAmountTextStyle: {
    fontFamily: "WorkSans_400Regular",
    color: "#F83E5A",
  },
});
