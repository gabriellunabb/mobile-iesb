import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-paper";
import Home from "../screens/Home";
import BuscaNavigator from "./BuscaNavigator";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: () => <Icon source={"home"} size={24}></Icon> }}
      ></Tab.Screen>
      <Tab.Screen
        name="Busca"
        component={BuscaNavigator}
        options={{
          tabBarIcon: () => <AntDesign name="search1" size={24} color="black" />,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
