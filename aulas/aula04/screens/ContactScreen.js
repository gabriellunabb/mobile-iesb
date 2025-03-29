import { FlatList, StyleSheet, View } from "react-native";
import { Appbar, FAB, List } from "react-native-paper";

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: { flexDirection: "row", position: "absolute", right: 16, bottom: 16 },
});

const contatos = [
  { id: 1, nome: "mamis", fone: "11 111111111" },
  { id: 2, nome: "oie", fone: "22 222222222" },
  { id: 3, nome: "Três", fone: "33 333333333" },
];

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Contatos"></Appbar.Content>
        <Appbar.Action icon="dots-vertical"></Appbar.Action>
      </Appbar.Header>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            left={(props) => <List.Icon {...props} icon="account"></List.Icon>}
            title={item.nome}
            description={item.fone}
          ></List.Item>
        )}
      ></FlatList>
      <View style={styles.fab}>
        <FAB icon="plus"></FAB>
      </View>
    </View>
  );
}
