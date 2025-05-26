import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import StoreItem from "../components/StoreItem";
import { StoreContext } from "../contexts/StoreContext";

export default function StoreScreen({ route }) {
  const [filter, setFilter] = useState("");

  const { categoria } = route.params;

  const { loading, searchStore } = useContext(StoreContext);

  useEffect(() => {
    searchStore(categoria, filter);
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
      <Searchbar
        placeholder={`Buscar em ${categoria}`}
        onIconPress={() => searchStore(categoria, filter)}
        onClearIconPress={() => searchStore( categoria, "")}
        onChangeText={setFilter}
        value={filter}
        style={{ marginBottom: 16 }}
      />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator sise="large" />
        </View>
      ) : (
        <StoreItem />
      )}
    </View>
  );
}
