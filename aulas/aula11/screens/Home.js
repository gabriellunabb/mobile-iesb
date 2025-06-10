import { useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Text } from "react-native-paper";

export default function Home() {
  const { usuario, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text variant="headlineMedium"> Olá {usuario.login}!</Text>
      <Button mode="contained" onPress={() => logout()}>
        Sair
      </Button>
    </View>
  );
}
