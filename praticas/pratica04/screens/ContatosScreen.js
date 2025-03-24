import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const contatos = [
  {
    id: 1,
    nome: "Ana Souza",
    telefone: "(11) 99999-9999",
    img: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    nome: "Carlos Lima",
    telefone: "(21) 98888-8888",
    img: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    nome: "Mariana Santos",
    telefone: "(31) 97777-7777",
    img: "https://picsum.photos/200/300?random=3",
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBFE" },
  appBar: {
    backgroundColor: "#6750A4",
    height: 63,
    paddingHorizontal: 16,
    justifyContent: "center",
    marginBottom: 8,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 28,
    alignSelf: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    height: 56,
  },
  itemAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 16 },
  itemName: { fontSize: 16, fontWeight: 500, color: "#1C1B1F" },
  itemPhone: { fontSize: 14, color: "#49454F" },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#E8DEF8",
    borderRadius: 16,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  fabIcon: { color: "#1C1B1F", fontSize: 24, fontWeight: "400" },
});

export default function ContatosScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Contatos</Text>
      </View>
      <ScrollView>
        {contatos.map((contato) => (
          <TouchableOpacity
            key={contato.id}
            onPress={() => {}}
            style={styles.item}
          >
            <Image source={{ uri: contato.img }} style={styles.itemAvatar} />
            <View>
              <Text style={styles.itemName}>{contato.nome}</Text>
              <Text style={styles.itemPhone}>{contato.telefone}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => {}} style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
