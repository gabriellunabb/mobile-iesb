import { IconButton, List } from "react-native-paper";

export default function TaskItem({ item }) {
  return (
    <List.Item
      title={item.descricao}
      description={item.concluida ? "Concluida" : "Pendente"}
      left={() => (
        <IconButton
          icon={item.concluida ? "check-circle" : "circle"}
          onPress={() => {}}
        />
      )}
      right={() => <IconButton icon="delete" onPress={() => {}} />}
    />
  );
}
