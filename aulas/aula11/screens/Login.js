import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import { AuthContext } from "../contexts/AuthContext";

export default function Login({ navigation }) {
  const { control, handleSubmit } = useForm();
  const { erro, login } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data)
    login({ ...data });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="E-mail"
            mode="outlined"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="senha"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            style={{ marginBottom: 8 }}
          />
        )}
      />
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ marginBottom: 8 }}
      >
        Entrar
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Registrar")}>
        Registrar
      </Button>
      <HelperText type="error" visible={erro}>
        {erro}
      </HelperText>
    </View>
  );
}
