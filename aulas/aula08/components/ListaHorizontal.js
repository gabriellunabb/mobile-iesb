import { useContext } from "react";
import { FlatList, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { LojaContext } from "../context/LojaContext";

export default function ListaHorizontal() {
  const { categorias } = useContext(LojaContext);

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
          <Button style={{ margin: 8 }} mode="contained" icon={item.icone}>
            {item.nome}
          </Button>
        )}
      ></FlatList>
    </View>
  );
}
