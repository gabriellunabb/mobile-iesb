import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const mensagens = [
  {
    id: 1,
    avatar: "https://picsum.photos/200?random=1",
    nome: "Mãe",
    msg: "Cadê tu?",
    horario: "21/03/2025 22:00",
  },
  {
    id: 2,
    avatar: "https://picsum.photos/200?random=2",
    nome: "Pai",
    msg: "Já chegou?",
    horario: "21/03/2025 22:01",
  },
  {
    id: 3,
    avatar: "https://picsum.photos/200?random=3",
    nome: "Irmão",
    msg: "Bora pro jogo?",
    horario: "20/03/2025 19:00",
  },
];

function ConversaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Conversas</Text>
      </View>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.photo} source={{ uri: item.avatar }} />
              <View style={{ flex: 1 }}>
                <View style={styles.chat}>
                  <Text style={styles.contactName}>{item.nome}</Text>
                  <Text style={styles.contactHour}>{item.horario}</Text>
                </View>
                <Text>{item.msg}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "darkgreen",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  item: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  photo: {
    height: 48,
    width: 48,
    borderRadius: 48,
    marginRight: 16,
  },
  chat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
    color: "darkgreen",
  },
  contactHour: {
    fontSize: 12,
    color: "gray",
  },
});

export default ConversaScreen;
