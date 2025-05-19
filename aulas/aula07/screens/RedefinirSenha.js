import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

export default function RedefinirSenha() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const trataEnviar = () => {
    if (!email) {
      setErro("Email obrigatorio");
      return;
    }
    if (!email.includes("@")) {
      setErro("Email invalido");
      return;
    }

    setEmail("");
    setErro("");
    alert("Email enviado!");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label={"Email"}
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        error={erro}
      />
      <HelperText type="error" visible={erro}>{erro}</HelperText>
      <Button mode="contained" onPress={trataEnviar}>
        Enviar
      </Button>
    </View>
  );
}
