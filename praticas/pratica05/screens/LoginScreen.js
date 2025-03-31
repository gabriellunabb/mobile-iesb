import { ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16 },
  title: { textAlign: "center", marginBottom: 24, marginTop: 16 },
  input: { marginBottom: 16 },
  info: { textAlign: "center", marginBottom: 16 },
  link: { color: "#6750A4" },
  buttonContainer: { flexDirection: "row", justifyContent: "center" },
});

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        Login
      </Text>
      <TextInput
        label="E-mail"
        mode="outlined"
        style={styles.input}
      ></TextInput>
      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      ></TextInput>
      <Button mode="contained" onPress={() => {}} style={styles.input}>
        Entrar
      </Button>
      <Text style={styles.info}>
        Esqueceu sua senha? <Text style={styles.link}>Recuperar senha</Text>
      </Text>
      <Text style={styles.info}>Ou entre com:</Text>
      <View style={styles.buttonContainer}>
        <IconButton icon="google" onPress={() => {}}></IconButton>
        <IconButton icon="facebook" onPress={() => {}}></IconButton>
      </View>
    </ScrollView>
  );
}
