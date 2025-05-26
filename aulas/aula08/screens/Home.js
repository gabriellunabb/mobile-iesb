import { useContext, useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ListaHorizontal from "../components/ListaHorizontal";
import ListaVertical from "../components/ListaVertical";
import { LojaContext } from "../context/LojaContext";

export default function Home() {
  const { carregando, carregarDados } = useContext(LojaContext);

  useEffect(() => {
    carregarDados();
  }, []);

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
          <ListaHorizontal></ListaHorizontal>
          <ListaVertical></ListaVertical>
        </View>
      )}
    </View>
  );
}
