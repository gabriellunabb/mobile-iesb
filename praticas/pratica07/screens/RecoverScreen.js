import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function RecoverScreen({ navigation }) {
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
  
  return (
    <View style={styles.container}>
      <TextInput
        label="E-mail"
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={() => console.log("Entrar")}
        style={styles.button}
      >
        Recuperar Senha
      </Button>
      <Button
        onPress={() => navigation.navigate("Login")}
        style={styles.recoverPassword}
      >
        Voltar para o Login
      </Button>
    </View>
  );
}
