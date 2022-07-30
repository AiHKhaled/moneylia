import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { RootProps } from "../@types/rootParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

type Props = NativeStackScreenProps<RootProps, "Login">;

export const LoginScreen = ({ navigation }: Props) => {
  const loginHandler = () => navigation.navigate("Tabs");
  return (
    <>
      <StatusBar backgroundColor="#ffff" style="dark" />
      <View style={styles.container}>
        <Image source={require("../assets/Frame.png")} style={styles.image} />

        <Text style={styles.title}>Save your Money</Text>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis
          erat a sit.
        </Text>

        <View style={styles.pressable}>
          <Pressable
            android_ripple={{ color: "#dddddd" }}
            onPress={loginHandler}
          >
            <Text style={styles.button}> Join for free</Text>
          </Pressable>
        </View>
        <Text style={styles.link}>Don't have SPID or CIE? Find out more</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 70,
  },
  image: {
    width: 335,
    height: 334,
    marginBottom: 24,
  },
  title: {
    width: 327,
    fontFamily: "WorkSans_600SemiBold",
    textAlign: "center",
    fontSize: 37,
    fontWeight: "600",
    color: "#3A3B7B",
    marginBottom: 10,
    letterSpacing: 1.2,
  },
  paragraph: {
    fontFamily: "WorkSans_400Regular",
    textAlign: "center",
    marginBottom: 40,
    fontSize: 16,
    color: "#6F6D7B",
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: -0.5,
  },
  pressable: {
    marginTop: 20,
    width: 260,
    backgroundColor: "#7476ED",
    borderRadius: 4,
    elevation: 4,
  },
  button: {
    fontFamily: "WorkSans_400Regular",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 16,
  },
  link: {
    fontFamily: "WorkSans_400Regular",
    marginTop: 15,
    color: "#3A3B7B",
    fontSize: 16,
    letterSpacing: 0.2,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});
