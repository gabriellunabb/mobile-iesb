import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "", senha: "" },
  });

  const onSubmit = (data) => {
    alert("Login realizado");
    reset();
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        rules={{ required: "Email é obrigatorio" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="E-mail"
            mode="outlined"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={!!errors.email}
          />
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}
      <Controller
        control={control}
        name="senha"
        rules={{
          required: "Senha é obrigatoria",
          minLength: { value: 6, message: "Senha deve ter 6 caracteres" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={!!errors.senha}
          />
        )}
      />
      {errors.senha && <Text>{errors.senha.message}</Text>}
      <Button
        mode="contained"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        Entrar
      </Button>
      <Button
        onPress={() => navigation.navigate("RecuperarSenha")}
        style={styles.button}
      >
        Esqueceu sua senha? Recuperar senha
      </Button>
      <Button onPress={() => navigation.navigate("CriarConta")}>
        Criar Conta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});
