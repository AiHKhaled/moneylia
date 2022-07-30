import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { BottomTabsList } from "./@types/BottomTabProps";
import { RootProps } from "./@types/rootParamList";
import HouseIcon from "./assets/icons/HouseIcon";
import { DashboardScreen } from "./screens/DashboardScreen";
import { LoginScreen } from "./screens/LoginScreen";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";
import { Rubik_400Regular, Rubik_500Medium } from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";
import { PagoPaScreen } from "./screens/PagoPaScreen";
import PagoPAIcon from "./assets/icons/PagoPAIcon";
import { PaymentsDetails } from "./screens/PaymentDetailsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ExtractScreen } from "./screens/Extract";
import FileIcon from "./assets/icons/FileIcon";
import UserIcon from "./assets/icons/UserIcon";

const { Navigator, Screen } = createNativeStackNavigator<RootProps>();

const Tabs = createBottomTabNavigator<BottomTabsList>();

const BottomNavBar = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: { height: 69, paddingBottom: 16, paddingTop: 8 },
        headerStyle: { backgroundColor: "#7476ED" },
        headerTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => <HouseIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Extract"
        component={ExtractScreen}
        options={{
          tabBarIcon: ({ color }) => <FileIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="PagoPA"
        component={PagoPaScreen}
        options={{
          tabBarIcon: ({ color }) => <PagoPAIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};

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
