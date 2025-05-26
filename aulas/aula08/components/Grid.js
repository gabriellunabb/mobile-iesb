import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { FlatList, View } from "react-native";
import { Button } from "react-native-paper";
import { LojaContext } from "../context/LojaContext";

export default function Grid() {
  const navigation = useNavigation();

  const { categorias } = useContext(LojaContext);
  return (
    <View>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: 16 }}>
            <Button
              icon={item.icone}
              mode="contained"
              onPress={() => navigation.navigate("Lojas", { categoria: item.nome })}
            >
              {item.nome}
            </Button>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
