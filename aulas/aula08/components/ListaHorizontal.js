import { FlatList, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function ListaHorizontal() {
  const categorias = [
    "Restaurantes",
    "Bares",
    "Lanchonetes",
    "Pizzarias",
    "Sorveterias",
  ];

  return (
    <View>
      <Text style={{ padding: 16 }} variant="titleMedium">
        Categorias
      </Text>
      <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Button style={{ margin: 8 }} mode="contained">
            {item}
          </Button>
        )}
      ></FlatList>
    </View>
  );
}
