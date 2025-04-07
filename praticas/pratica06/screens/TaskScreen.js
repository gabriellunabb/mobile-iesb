import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { FlatList, StyleSheet, View } from "react-native";
import { Appbar, Button, FAB, Modal, TextInput } from "react-native-paper";
import TaskItem from "../components/TaskItem";

export default function TaskScreen() {
  const { tarefas, adicionar } = useContext(TaskContext);

  const [novaTarefa, setNovaTarefa] = useState("");
  const [exibeModal, setExibeModal] = useState(false);

  const styles = StyleSheet.create({
    container: { flex: 1 },
    fab: { position: "absolute", bottom: 16, right: 16 },
    modal: {
      flexGrow: 1,
      justifyContent: "center",
      padding: 20,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
      backgroundColor: "#FFFFFF",
      padding: 20,
      borderRadius: 10,
    },
    input: { marginBottom: 8 },
  });

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem tarefa={item} />}
      />
      <FAB icon="plus" onPress={() => setExibeModal(true)} style={styles.fab} />
      <Modal visible={exibeModal} animationType="slide" transparent>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <TextInput
              label="Nova Tarefa"
              value={novaTarefa}
              onChangeText={setNovaTarefa}
              mode="outlined"
              style={styles.input}
            />
            <Button
              style={styles.input}
              mode="contained"
              onPress={() => {
                if (novaTarefa.trim()) {
                  adicionar(novaTarefa);
                  setNovaTarefa("");
                  setExibeModal(false);
                }
              }}
            >
              Adicionar
            </Button>
            <Button style={styles.input} onPress={() => setExibeModal(false)}>
              Cancelar
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}
