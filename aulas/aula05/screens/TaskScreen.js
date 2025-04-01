import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  FAB,
  List,
  Modal,
  Text,
  TextInput,
} from "react-native-paper";

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: { position: "absolute", bottom: 16, right: 16 },
  modal: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 10,
  },
});

export default function TaskScreen() {
  const [concluida, setConcluida] = useState(false);

  const [exibeModal, setExibeModal] = useState(false);

  return (
    <View style={styles.container} >
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <List.Item
        onPress={() => setConcluida(!concluida)}
        title="Estudar pra provas"
        right={(props) => (
          <List.Icon
            {...props}
            icon={concluida ? "circle" : "circle-outline"}
          />
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          setExibeModal(true);
        }}
      />
      <Modal contentContainerStyle={styles.modal} visible={exibeModal} dismissable>
        <TextInput label="Nova Terefa" />
        <Button onPress={() => setExibeModal(false)}>Salvar</Button>
      </Modal>
    </View>
  );
}
