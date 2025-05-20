import { View } from "react-native";
import ListaVertical from "../components/ListaVertical";
import { Text } from "react-native-paper";
import ListaHorizontal from "../components/ListaHorizontal";

export default function Home() {
  return (
    <View style={{ flex: 1}}>
      <ListaHorizontal></ListaHorizontal>
      <ListaVertical></ListaVertical>
    </View>
  );
}
