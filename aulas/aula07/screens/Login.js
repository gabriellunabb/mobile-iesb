import { View } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
  const { control } = useForm();
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
          ></TextInput>
        )}
      ></Controller>
      <HelperText type="error" visible={false}></HelperText>
      <Controller
        control={control}
        name="senha"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
          ></TextInput>
        )}
      ></Controller>
      <HelperText type="error" visible={false}></HelperText>
      <Button mode="contained" onPress={() => {}} style={{ marginBottom: 16 }}>
        Entrar
      </Button>
      <Button mode="outlined" onPress={() => {}} style={{ marginBottom: 16 }}>
        Criar Conta
      </Button>
      <Button mode="outlined" onPress={() => {}} style={{ marginBottom: 16 }}>
        {" "}
        Redefinir Senha
      </Button>
    </View>
  );
}
