import { ScrollView } from "react-native";
import GalleryScreen from "./screens/GalleryScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  return (
    <ScrollView>
      <GalleryScreen />
      <HomeScreen />
      <ListScreen />
      <ProfileScreen />
    </ScrollView>
  );
}
