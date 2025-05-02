import { Image, View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://picsum.photos/203" }}
        ></Avatar.Image>
        <Text>João da Silva</Text>
        <Text>joao.silva@email.com.br</Text>
        <Text>(61) 99999-9999</Text>
        <Button mode="contained">Editar Perfil</Button>
      </View>
    </View>
  );
}
