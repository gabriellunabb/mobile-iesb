import { useContext, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  Divider,
  FAB,
  List,
  Modal,
  Snackbar,
  Text,
  TextInput,
} from "react-native-paper";
import { TaskContext } from "../context/TaskContext";

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: { position: "absolute", bottom: 16, right: 16 },
  modal: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
});

export default function TaskScreen() {
  const [refresh, setRefresh] = useState(false);

  const [exibeModal, setExibeModal] = useState(false);

  const [exibeAlerta, setExibeAlerta] = useState(false);

  const [input, setInput] = useState("");

  const [tarefaSelecionada, setTarefaSelecionada] = useState({});

  const [exibeSnack, setExibeSnack] = useState(false);

  const { tarefas, adicionarTarefa, removerTarefa } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <List.Item
              onPress={() => {
                item.concluida = !item.concluida;
                setRefresh(!refresh);
              }}
              onLongPress={() => {
                setTarefaSelecionada(item);
                setExibeAlerta(true);
              }}
              title={item.nome}
              right={(props) => (
                <List.Icon
                  {...props}
                  icon={item.concluida ? "circle" : "circle-outline"}
                />
              )}
            />
            <Divider style={{ marginHorizontal: 24 }} />
          </>
        )}
      />

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          setExibeModal(true);
        }}
      />
      <Modal contentContainerStyle={styles.modal} visible={exibeModal}>
        <TextInput
          label="Nova Terefa"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Button
          onPress={() => {
            setExibeModal(false);
            adicionarTarefa(input);
            setExibeSnack(true);
            setInput("");
          }}
        >
          Salvar
        </Button>
      </Modal>
      <Modal contentContainerStyle={styles.modal} visible={exibeAlerta}>
        <Text variant="labelLarge">
          Deseja apagar a tarefa {tarefaSelecionada.nome}?
        </Text>
        <Button onPress={() => setExibeAlerta(false)}>Não</Button>
        <Button
          onPress={() => {
            removerTarefa(tarefaSelecionada);
            setExibeSnack(true);
            setExibeAlerta(false);
          }}
        >
          Sim
        </Button>
      </Modal>
      <Snackbar
        visible={exibeSnack}
        onDismiss={() => {
          setExibeSnack(false);
        }}
      >
        Ação realizada!
      </Snackbar>
    </View>
  );
}
