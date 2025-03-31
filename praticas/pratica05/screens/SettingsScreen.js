import { ScrollView, StyleSheet, View } from "react-native";
import {
  Appbar,
  Checkbox,
  RadioButton,
  Switch,
  Text,
} from "react-native-paper";

const styles = StyleSheet.create({
  container: { flex: 1 },
  secitonContainer: { paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 8 },
  switchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  radioItem: { flexDirection: "row", alignItems: "center" },
});

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}}></Appbar.BackAction>
        <Appbar.Content title="Configurações"></Appbar.Content>
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.secitonContainer}>
        <Text style={styles.sectionTitle}>Definir Tema</Text>
        <View style={styles.switchItem}>
          <Text>Modo Escuro</Text>
          <Switch value={true} onValueChange={() => {}}></Switch>
        </View>
        <Text style={styles.sectionTitle}>Notificações</Text>
        <View style={styles.switchItem}>
          <Checkbox.Item label="SMS" status={"unchecked"} onPress={() => {}} />
          <Checkbox.Item label="Push" status={"checked"} onPress={() => {}} />
        </View>
        <Text style={styles.sectionTitle}>Selecione seu idioma</Text>
        <RadioButton.Group onValueChange={() => {}} value={"pt"}>
          <View style={styles.radioItem}>
            <RadioButton value="pt" />
            <Text>Português</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="en" />
            <Text>Inglês</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="es" />
            <Text>Espanhol</Text>
          </View>
        </RadioButton.Group>
      </ScrollView>
    </View>
  );
}
