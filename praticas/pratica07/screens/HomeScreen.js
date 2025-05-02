import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    text: {
      fontSize: 20,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Meu App!</Text>
      <Text style={styles.text}>
        Navegue pelo menu lateral para acessar seu perfil.
      </Text>
    </View>
  );
}
