import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "blue",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  container: { flex: 1, padding: 16 },
  photo: { borderRadius: 8, height: 300 },
  productName: { fontSize: 16, fontWeight: 600, marginTop: 8 },
  productDetail: { fontSize: 12, color: "gray", marginBottom: 64 },
  sectionQuantidadePreco: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 150,
  },
  buttonQuantidade: {
    backgroundColor: "lightblue",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  textQuantidade: {
    fontSize: 16,
    fontWeight: 600,
  },
  price: { fontSize: 24, color: "blue" },
  adicionar: {
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 8,
  },
});

export default function ProdutoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Detalhes do Produto</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://picsum.photos/300/300" }}
          style={styles.photo}
        />
        <Text style={styles.productName}>Nome do Produto</Text>
        <Text style={styles.productDetail}>Caracteristicas do Produto</Text>
        <View style={styles.sectionQuantidadePreco}>
          <View style={styles.sectionButtons}>
            <View style={styles.buttonQuantidade}>
              <Text style={styles.textoBranco}>-</Text>
            </View>
            <View>
              <Text style={styles.textQuantidade}>1</Text>
            </View>
            <View style={styles.buttonQuantidade}>
              <Text>+</Text>
            </View>
          </View>
          <Text style={styles.price}>R$ 99,99</Text>
        </View>
        <View style={styles.adicionar}>
          <Text>Adicionar ao Carrinho</Text>
        </View>
      </View>
    </View>
  );
}
