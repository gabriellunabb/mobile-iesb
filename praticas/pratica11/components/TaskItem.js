import { useContext } from "react";
import { IconButton, List } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";

export default function TaskItem({ task }) {
  const { updateTask, deleteTask, getTasks } = useContext(TaskContext);

  const handleUpdate = async () => {
    await updateTask({ ...task, concluida: !task.concluida });
    await getTasks();
  };

  return (
    <List.Item
      title={task.descricao}
      description={task.concluida ? "Concluída" : "Pendente"}
      left={() => (
        <IconButton
          icon={task.concluida ? "check-circle" : "circle"}
          onPress={handleUpdate}
        />
      )}
      right={() => (
        <IconButton
          icon="delete"
          onPress={async () => await deleteTask(task.id)}
        />
      )}
    />
  );
}
