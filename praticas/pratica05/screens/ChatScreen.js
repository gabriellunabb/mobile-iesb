import { ScrollView, StyleSheet, View } from "react-native";
import {
  Appbar,
  FAB,
  IconButton,
  List,
  Text,
  TextInput,
} from "react-native-paper";

const conversas = [
  {
    id: 1,
    nome: "Ana Souza",
    mensagem: "Oi, tudo bem?",
    hora: "08:45",
  },
  {
    id: 2,
    nome: "Carlos Lima",
    mensagem: "Vamos marcar aquela reunião?",
    hora: "09:30",
  },
  {
    id: 3,
    nome: "Mariana Santos",
    mensagem: "Enviei o arquivo para você.",
    hora: "10:10",
  },
];

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: { marginLeft: 8 },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  input: { width: "70%" },
  fab: { position: "absolute", margin: 16, right: 0, bottom: 60 },
});

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Conversas"></Appbar.Content>
        <Appbar.Action icon="dots-vertical" onPress={() => {}}></Appbar.Action>
      </Appbar.Header>
      <ScrollView>
        {conversas.map((conversa) => (
          <List.Item
            style={styles.item}
            key={conversa.id}
            title={conversa.nome}
            description={conversa.mensagem}
            left={() => <List.Icon icon="account-circle" />}
            right={() => <Text>{conversa.hora}</Text>}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomBar}>
        <IconButton icon="camera" onPress={() => {}} />
        <TextInput
          mode="outlined"
          placeholder="Mensagem"
          style={styles.input}
        />
        <IconButton icon="send" onPress={() => {}} />
      </View>
      <FAB icon="plus" onPress={() => {}} style={styles.fab} />
    </View>
  );
}
