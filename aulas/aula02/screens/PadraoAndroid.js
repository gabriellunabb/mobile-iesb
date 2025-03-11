import { StyleSheet, Text, View } from "react-native";

export default function PadraoAndroid() {
  return (
    <View style={{ flex: 1, backgroundColor: "lightgray" }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Meu App</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 1</Text>
        <Text>Descricao 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
        <Text>Descricao 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
        <Text>Descricao 3</Text>
      </View>
      <View style={styles.fab}>
        <Text style={{ fontSize: 24 }}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    justifyContent: "center",
    paddingLeft: 16,
    backgroundColor: "gray",
  },
  appTitle: { fontSize: 24, color: "white", paddingTop: 18 },
  item: {
    margin: 2,
    padding: 16,
    height: 64,
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: "white",
    boxShadow: "1 1 3 #999",
  },
  fab: {
    height: 64,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 16,
    right: 16,
    borderRadius: 32,
    backgroundColor: "white",
    boxShadow: "1 1 3 #999",
  },
});

const listaStyle = StyleSheet.create({});
