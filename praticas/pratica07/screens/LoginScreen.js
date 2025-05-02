import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    input: {
      marginBottom: 15,
    },
    recoverPassword: {
      textAlign: "center",
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={() => console.log("Entrar")}
        style={styles.button}
      >
        Entrar
      </Button>
      <Button
        onPress={() => navigation.navigate("RecuperarSenha")}
        style={styles.recoverPassword}
      >
        Esqueceu sua senha? Recuperar senha
      </Button>
    </View>
  );
}
