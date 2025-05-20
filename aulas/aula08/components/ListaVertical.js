import { FlatList, View } from "react-native";
import { List, Text } from "react-native-paper";

export default function ListaVertical() {
  const lojas = [
    "Restaurante Asa Sul",
    "Restaurante Asa Norte",
    "Restaurante Tagua",
    "Bar Ceilandia",
    "Bar Sudoeste",
    "Lanchonete Gama",
    "Pizzaria Nucleo",
    "Restaurante Tagua",
    "Bar Sudoeste",
  ];
  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleMedium">Lojas</Text>
      <FlatList
        data={lojas}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <List.Item title={item} description={"* 4,8"} />
        )}
      />
    </View>
  );
}
