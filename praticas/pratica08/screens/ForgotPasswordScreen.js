import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function ForgotPasswordSreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const validarEmail = () => {
    if (!email) {
      setErro("E-mail é obrigatório.");
    } else if (!email.includes("@")) {
      setErro("E-mail inválido.");
    } else {
      setErro("");
      alert("Instruções enviadas para o e-mail!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="E-mail"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        error={!!erro}
        style={styles.input}
      />
      {erro && <Text>{erro}</Text>}
      <Button mode="contained" onPress={validarEmail} style={styles.button}>
        Enviar
      </Button>
      <Button onPress={() => navigation.goBack()}>Voltar para o Login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  }
});
