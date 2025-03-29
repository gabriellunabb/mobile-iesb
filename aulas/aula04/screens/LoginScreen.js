import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  space: { marginBottom: 8 },
  center: { alignSelf: "center" },
  row: { flexDirection: "row" },
});

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.space, styles.center]} variant="headlineLarge">
        Login
      </Text>
      <TextInput
        style={styles.space}
        mode="outlined"
        label="E-mail"
        right={<TextInput.Icon icon="email" />}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.space}
        mode="outlined"
        label="Senha"
        right={<TextInput.Icon icon="eye" />}
        secureTextEntry
      />
      <Button style={styles.space} mode="contained">
        Entrar
      </Button>
      <Text style={[styles.space, styles.center]}>Ou entre com:</Text>
      <View style={[styles.row, styles.center]}>
        <IconButton icon={"google"} />
        <IconButton icon={"facebook"} />
      </View>
    </View>
  );
}
