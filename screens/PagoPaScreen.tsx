import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TransactionTypes } from "../@types/TransactionTypes";
import PagoPAIcon from "../assets/icons/PagoPAIcon";
import { Header } from "../components/sharedComponents/Header";
import { TransactionItem } from "../components/TransactionItem";
import { TransactionList } from "../data/transactions";

const renderTransactionItem = (item: ListRenderItemInfo<TransactionTypes>) => {
  return <TransactionItem {...item.item} />;
};

export const PagoPaScreen = () => {
  return (
    <View style={styles.container}>
      <Header bgColor="#BF7EE6" />
      <View style={styles.headerLower}>
        <Text style={styles.textStyle}>Tax payments </Text>
        <PagoPAIcon color="white" />
      </View>
      <View style={styles.innerHeader}>
        <Text style={styles.innerTitle}>Movements to pay</Text>
        <Text style={styles.paragraph}>
          View pending transactions for the past two years and proceed to
          payment.
        </Text>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={TransactionList}
          renderItem={renderTransactionItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  headerLower: {
    width: "100%",
    height: 130,
    backgroundColor: "#BF7EE6",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    fontFamily: "WorkSans_500Medium",
    color: "white",
    fontSize: 30,
  },

  innerHeader: {
    width: "100%",
    paddingHorizontal: 17,
    marginTop: 24,
  },
  innerTitle: {
    color: "#3A3B7B",
    fontFamily: "WorkSans_500Medium",
    fontSize: 30,
    marginBottom: 8,
  },

  paragraph: {
    color: "#6F6D7B",
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 16,
  },
  flatlist: {
    flex: 1,
    width: "100%",
    marginTop: 16,
  },
});
