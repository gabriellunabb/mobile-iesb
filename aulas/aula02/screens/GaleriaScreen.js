import { StyleSheet, Text, View } from "react-native";

export default function GaleriaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.grid}>
        <View style={styles.photo}>
          <Text>Foto 1</Text>
        </View>
        <View style={styles.photo}>
          <Text>Foto 2</Text>
        </View>
        <View style={styles.photo}>
          <Text>Foto 3</Text>
        </View>
        <View style={styles.photo}>
          <Text>Foto 4</Text>
        </View>
        <View style={styles.photo}>
          <Text>Foto 5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 8, padding: 8 },
  photo: {
    height: 100,
    width: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
