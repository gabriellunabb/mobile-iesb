import { View } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import ListaVertical from "../components/ListaVertical";
import { useContext, useState } from "react";
import { LojaContext } from "../context/LojaContext";

export default function Lojas({ route }) {
  const { categoria } = route.params;
  const [filtro, setFiltro] = useState("");
  const { buscarLojas, carregando } = useContext(LojaContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {carregando ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      ) : (
        <View>
          <Searchbar
            value={filtro}
            onChangeText={setFiltro}
            placeholder={`Buscar em ${categoria}`}
            onClearIconPress={() => {}}
            onIconPress={() => {
              buscarLojas(filtro);
            }}
          ></Searchbar>
          <ListaVertical></ListaVertical>
        </View>
      )}
    </View>
  );
}
