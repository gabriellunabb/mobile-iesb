import { FlatList, View } from "react-native";
import { Button } from "react-native-paper";

export default function Grid() {
  const categorias = [
    "Restaurantes",
    "Bares",
    "Lanchonetes",
    "Pizzarias",
    "Sorveterias",
    "Restaurantes",
    "Bares",
    "Lanchonetes",
    "Pizzarias",
    "Sorveterias",
    "Restaurantes",
    "Bares",
    "Lanchonetes",
    "Pizzarias",
  ];

  return (
    <View>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: 16 }}>
            <Button>{item}</Button>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
