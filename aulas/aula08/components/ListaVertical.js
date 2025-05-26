import { useContext } from "react";
import { FlatList, View } from "react-native";
import { List, Text } from "react-native-paper";
import { LojaContext } from "../context/LojaContext";

export default function ListaVertical() {
  const { lojas } = useContext(LojaContext);
  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleMedium">Lojas</Text>
      <FlatList
        data={lojas}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <List.Item title={item.nome} description={`* ${item.nota}`} />
        )}
      />
    </View>
  );
}
