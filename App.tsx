import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { RootProps } from "./@types/rootParamList";

import { LoginScreen } from "./screens/LoginScreen";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";
import { Rubik_400Regular, Rubik_500Medium } from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";

import { PaymentsDetails } from "./screens/PaymentDetailsScreen";
import { BottomNavBar } from "./components/BottomNavBar";

const { Navigator, Screen } = createNativeStackNavigator<RootProps>();

export default function App() {
  const [isLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_600SemiBold,
    WorkSans_500Medium,
    Rubik_400Regular,
    Rubik_500Medium,
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Tabs"
            component={BottomNavBar}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="PaymentsDetails"
            component={PaymentsDetails}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
