import { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Appbar, FAB, Modal } from "react-native-paper";
import TaskModal from "../components/TaskModal";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "../components/TaskItem";

export default function TaskScreen() {
  const { tasks, getTasks } = useContext(TaskContext);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const carregar = async () => {
      await getTasks();
    };
    carregar();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <View style={{ flex: 1, paddingBottom: 16 }}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TaskItem task={item} />}
        />
      </View>
      <FAB
        style={{ position: "absolute", bottom: 16, right: 16 }}
        icon="plus"
        onPress={() => setShowModal(true)}
      />
      <Modal visible={showModal} animationType="slide" transparent={false}>
        <TaskModal setShowModal={setShowModal} />
      </Modal>
    </View>
  );
}
