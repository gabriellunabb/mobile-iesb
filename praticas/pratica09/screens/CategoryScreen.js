import { View } from "react-native";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoryScreen() {
  return (
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
      <CategoryGrid></CategoryGrid>
    </View>
  );
}
