import { ProfileScreen } from "../screens/ProfileScreen";
import { ExtractScreen } from "../screens/Extract";
import FileIcon from "../assets/icons/FileIcon";
import UserIcon from "../assets/icons/UserIcon";
import HouseIcon from "../assets/icons/HouseIcon";
import { DashboardScreen } from "../screens/DashboardScreen";
import { BottomTabsList } from "../@types/BottomTabProps";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PagoPaScreen } from "../screens/PagoPaScreen";
import PagoPAIcon from "../assets/icons/PagoPAIcon";
const Tabs = createBottomTabNavigator<BottomTabsList>();

export const BottomNavBar = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: { height: 69, paddingBottom: 16, paddingTop: 8 },
        headerStyle: { backgroundColor: "#7476ED" },
        headerTintColor: "white",
        tabBarActiveTintColor: "#7476ED",
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
