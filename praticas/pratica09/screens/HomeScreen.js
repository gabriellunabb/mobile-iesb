import { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import CategoryItem from "../components/CategoryItem";
import StoreItem from "../components/StoreItem";

export default function HomeScreen({ navigation }) {
  const { loading, loadData } = useContext(StoreContext);

  useEffect(() => loadData(), []);

  return (
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <CategoryItem />
          <StoreItem />
        </>
      )}
    </View>
  );
}
