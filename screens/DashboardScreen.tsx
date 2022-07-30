import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ContributionTypes } from "../@types/ContributionTypes";
import { Contributions } from "../components/Contributions";
import { Header } from "../components/sharedComponents/Header";
import { UserCard } from "../components/UserCard";
import { ContributionDataList } from "../data/contributions";

const renderContributionItem = (
  itemData: ListRenderItemInfo<ContributionTypes>
) => {
  return (
    <Contributions
      type={itemData.item.type}
      amount={itemData.item.amount}
      Icon={itemData.item.Icon}
    />
  );
};

export const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Header bgColor="#7476ED" />
      <View style={styles.headerLower}>
        <Text style={styles.hello}>Hello, John S.</Text>
        <Text style={styles.welcome}>Welcome in Moneylia</Text>
      </View>
      <UserCard />
      <View style={styles.contributionsTitleContainer}>
        <Text style={styles.contributionsTitle}>Contributions of 2022</Text>
      </View>
      <View style={styles.contributionsView}>
        <FlatList
          data={ContributionDataList}
          renderItem={renderContributionItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
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
    backgroundColor: "#7476ED",
    height: 193,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
  },
  hello: {
    fontFamily: "WorkSans_400Regular",
    marginTop: 25,

    fontSize: 32,
    fontWeight: "400",
    color: "white",
  },
  welcome: {
    fontFamily: "WorkSans_400Regular",
    color: "white",
    fontSize: 14,
  },
  contributionsTitleContainer: {
    paddingTop: 16,
    width: "100%",
    paddingLeft: 20,
  },
  contributionsTitle: {
    marginTop: 24,
    fontFamily: "WorkSans_500Medium",
    fontSize: 30,
    color: "#3A3B7B",
    alignSelf: "stretch",
  },
  contributionsView: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
});
