import { View } from "react-native";
import { Appbar, FAB, Modal } from "react-native-paper";
import { FlatList } from "react-native-web";
import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";

export default function TaskScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <FlatList
        data={[{ id: 1, descricao: "Testar Item da Lista", concluida: true }]}
        keyExtractor={(item) => item.id}
        renderItem={TaskItem}
      />
      <FAB
        style={{ position: "absolute", right: 16, bottom: 32 }}
        icon="plus"
        onPress={() => {}}
      />
      <Modal visible={false} animationType="slide" transparent>
        <TaskModal />
      </Modal>
    </View>
  );
}
