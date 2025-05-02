import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={({route}) => ({
      drawerIcon: ({ color, size }) => {
        let iconName;
        switch (route.name) {
          case "Home":
            iconName = "home";
            break;
          case "Perfil":
            iconName = "person";
            break;
        }
        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Perfil" component={ProfileScreen} />
  </Drawer.Navigator>;
}
