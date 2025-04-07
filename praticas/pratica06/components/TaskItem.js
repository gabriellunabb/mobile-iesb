import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { IconButton, List } from "react-native-paper";

export default function TaskItem({ tarefa }) {
  const { concluir, remover } = useContext(TaskContext);

  return (
    <List.Item
      title={tarefa.nome}
      left={() => (
        <IconButton
          icon={
            tarefa.concluida ? "check-circle" : "checkbox-blank-circle-outline"
          }
          onPress={() => concluir(tarefa.id)}
        />
      )}
      right={() => (
        <IconButton icon={"delete"} onPress={() => remover(tarefa.id)} />
      )}
    ></List.Item>
  );
}
