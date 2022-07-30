import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootProps } from "../@types/rootParamList";
import { TransactionTypes } from "../@types/TransactionTypes";
import { ArrowLeftIcon } from "../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../assets/icons/ArrowRightIcon";
import PagoPAIcon from "../assets/icons/PagoPAIcon";

export const TransactionItem: React.FC<TransactionTypes> = ({
  causal,
  creditorTaxCode,
  due,
  expiryDate,
  noticeCode,
  creditor,
  id,
}: TransactionTypes) => {
  type NavigationProps = NativeStackNavigationProp<RootProps>;

  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.info}
        android_ripple={{ color: "#CCCCCC" }}
        onPress={() => {
          navigation.navigate("PaymentsDetails", { id: id });
        }}
      >
        <View style={styles.innerCard}>
          <View style={styles.icon}>
            <PagoPAIcon color="#BF7EE6" />
          </View>
          <View>
            <View style={styles.causalStyle}>
              <Text style={styles.causalFont}>
                {causal.length < 50
                  ? causal
                  : causal.slice(0, 50).concat("...")}
              </Text>
            </View>
            <View style={styles.infoBottom}>
              <Text style={styles.date}>{expiryDate} </Text>
              <Text style={styles.moneyDue}> {due} </Text>
            </View>
          </View>
          <View style={styles.arrow}>
            <ArrowRightIcon />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    height: 80,
    elevation: 4,
    marginBottom: 16,

    borderRadius: 8,
    overflow: "hidden",

    marginHorizontal: 16,
  },
  icon: {
    backgroundColor: "#0066CC1A",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
  },
  innerCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
  },
  infoBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  causalStyle: {
    width: 230,
    marginBottom: 4,
  },
  causalFont: {
    fontFamily: "Rubik_400Regular",
  },
  arrow: {
    marginRight: 16,
  },
  date: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    color: "#A5A5AA",
  },
  moneyDue: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    color: "#F83E5A",
  },
});
