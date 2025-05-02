import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MusicScreen from "../screens/MusicScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Músicas":
              iconName = "library-music";
              break;
            case "Playlists":
              iconName = "playlist-play";
              break;
            case "Favoritas":
              iconName = "favorite";
              break;
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Músicas" component={MusicScreen} />
      <Tab.Screen name="Playlists" component={PlaylistScreen} />
      <Tab.Screen name="Favoritas" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
