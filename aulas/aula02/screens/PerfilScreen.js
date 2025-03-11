import { StyleSheet, Text, View } from "react-native";

export default function PerfilScreen() {
  return (
    <View syle={{ flex: 1 }}>
      <View style={styles.perfil}>
        <View style={styles.imagem}></View>
        <View style={styles.card}>
          <Text>Nome</Text>
          <Text>Email</Text>
        </View>
      </View>
      <View>
        <Text>Habilidades:</Text>
        <View style={styles.skills}>
          <Text>Java</Text>
          <Text>JS</Text>
          <Text>REACT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  perfil: { flexDirection: "row", padding: 16 },
  card: { justifyContent: "center", padding: 16 },
  imagem: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    borderRadius: 50,
  },
  skills: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
