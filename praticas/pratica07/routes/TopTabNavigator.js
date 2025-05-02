import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import ContactScreen from "../screens/ContactScreen";
import ChatScreen from "../screens/ChatScreen";
import CallScreen from "../screens/CallScreen";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <View style={{ flex: 1, paddingTop: 24 }}>
      <Tab.Navigator>
        <Tab.Screen name="Conversas" component={ChatScreen}></Tab.Screen>
        <Tab.Screen name="Ligações" component={CallScreen}></Tab.Screen>
        <Tab.Screen name="Contatos" component={ContactScreen}></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}
