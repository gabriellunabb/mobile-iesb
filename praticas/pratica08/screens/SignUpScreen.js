import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
    .required("Confirme a senha"),
});

export default function SignUpScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert("Conta criada com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nome"
            mode="outlined"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={!!errors.nome}
          />
        )}
      />
      {errors.nome && <Text>{errors.nome.message}</Text>}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="E-Mail"
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

      <Controller
        control={control}
        name="confirmarSenha"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Confirme a Senha"
            mode="outlined"
            secureTextEntry
            style={styles.input}
            value={value}
            onChangeText={onChange}
            error={!!errors.confirmarSenha}
          />
        )}
      />
      {errors.confirmarSenha && <Text>{errors.confirmarSenha.message}</Text>}

      <Button
        mode="contained"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        Criar
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
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
  },
});
