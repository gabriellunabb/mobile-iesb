import { View } from "react-native";

export default function PadraoIOS() {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ height: 64, backgroundColor: "gray" }}></View>
      <View style={{ height: 64, backgroundColor: "lightgray" }}></View>
    </View>
  );
}
