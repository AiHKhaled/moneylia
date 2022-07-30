import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootProps } from "../@types/rootParamList";
import PagoPAIcon from "../assets/icons/PagoPAIcon";
import { PaymentHeader } from "../components/PaymentDetailsHeader";
import { TransactionList } from "../data/transactions";

type Props = NativeStackScreenProps<RootProps, "PaymentsDetails">;

export const PaymentsDetails = ({ navigation, route }: Props) => {
  const id = route.params.id;

  const transaction = TransactionList.find((item) => {
    if (item.id === id) {
      return item;
    }
  });
  const BackButtonHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <PaymentHeader BackHandler={BackButtonHandler} />
      <View>
        <View style={styles.innerHeader}>
          <Text style={styles.paymentText}>Payment notice </Text>
          <View style={styles.image}>
            <PagoPAIcon color="#BF7EE6" />
          </View>
        </View>
        <View style={styles.dataStyle}>
          <Text style={styles.title}> Creditor </Text>
          {transaction?.creditor.map((item) => (
            <Text key={item.id} style={styles.value}>
              {item.text}
            </Text>
          ))}
        </View>
        <View style={styles.dataStyle}>
          <Text style={styles.title}>Causal</Text>
          <Text style={styles.value}>{transaction?.causal}</Text>
        </View>
        <View style={styles.dataStyle}>
          <Text style={styles.title}>Expiry Date</Text>
          <Text style={styles.value}>{transaction?.expiryDate}</Text>
        </View>
        <View style={styles.dataStyle}>
          <Text style={styles.title}>Creditor tax code</Text>
          <Text style={styles.value}>{transaction?.creditorTaxCode}</Text>
        </View>
        <View style={[styles.dataStyle, styles.noDivider]}>
          <Text style={styles.title}>Notice code</Text>
          <Text style={styles.value}>{transaction?.noticeCode}</Text>
        </View>
      </View>

      <View style={styles.totalDueStyle}>
        <View style={styles.totalDueTop}>
          <Text style={styles.totalDueTitle}>Total due</Text>
          <Text style={styles.total}> {transaction?.due} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable android_ripple={{ color: "#ddd" }}>
            <Text style={styles.button}>Pay</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerHeader: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,

    borderBottomWidth: 2,
    borderColor: "#EAEAEC",
    paddingBottom: 24,
  },
  paymentText: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 20,
    color: "#3A3B7B",
  },
  image: {
    backgroundColor: "#0066CC1A",
    width: 56,
    height: 56,
    borederRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  dataStyle: {
    marginTop: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#EAEAEC",
    paddingBottom: 16,
  },
  title: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 16,
    color: "#312E43",
    marginBottom: 8,
  },
  value: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 16,

    color: "#6F6D7B",
  },
  totalDueStyle: {
    width: "100%",
    height: 138,
    elevation: 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,

    position: "absolute", //Here is the trick
    bottom: 0,
  },
  totalDueTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },

  totalDueTitle: {
    fontFamily: "WorkSans_500Medium",
    fontSize: 20,
    color: "#312E43",
  },
  total: {
    fontFamily: "WorkSans_400Regular",
    color: "#F83E5A",
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#BF7EE6",
    borderRadius: 4,
    elevation: 4,
    marginHorizontal: 24,
  },
  button: {
    fontFamily: "WorkSans_500Medium",
    textAlign: "center",
    color: "#fff",
    paddingVertical: 16,
    fontSize: 18,
  },
  noDivider: {
    borderBottomWidth: 0,
  },
});
