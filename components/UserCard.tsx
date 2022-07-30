import { Image, StyleSheet, Text, View } from "react-native";
import UserCircleIcon from "../assets/icons/UserCircleIcon";
import { Header } from "./sharedComponents/Header";

export const UserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardTitle}>
        <UserCircleIcon />
        <Text style={styles.title}> User summary </Text>
      </View>
      <View style={styles.smallContainer}>
        <View>
          <Text style={styles.infoCardTitle}>Status</Text>
          <Text style={styles.infoDescription}>Subscribed</Text>
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.infoCardTitle}>Birthday</Text>
          <Text style={styles.infoDescription}>26/01/1994</Text>
        </View>
      </View>
      <View style={styles.smallContainer}>
        <View>
          <Text style={styles.infoCardTitle}>City</Text>
          <Text style={styles.infoDescription}>Barcelona</Text>
        </View>
        <View style={styles.country}>
          <View>
            <Text style={styles.infoCardTitle}>Country</Text>
            <Text style={styles.infoDescription}>ES</Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.infoCardTitle}>Number</Text>
            <Text style={styles.infoDescription}>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 341,
    height: 178,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    marginTop: -80,
    borderRadius: 12,
    padding: 24,
  },
  cardTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#3A3B7B",
    fontSize: 20,
    marginLeft: 10,
    fontFamily: "WorkSans_400Regular",
  },
  smallContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  rightItem: {
    marginRight: 80,
  },
  country: {
    marginRight: 33,
    flexDirection: "row",
  },
  number: {
    marginLeft: 30,
  },
  infoCardTitle: {
    color: "#6F6D7B",
    fontSize: 13,
    fontFamily: "WorkSans_400Regular",
  },
  infoDescription: {
    fontSize: 16,
    color: "#3A3B7B",
    fontFamily: "WorkSans_400Regular",
  },
});
