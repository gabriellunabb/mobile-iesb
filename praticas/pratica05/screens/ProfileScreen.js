import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, List, Text } from "react-native-paper";

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 24 },
  profileSection: { flexGrow: 1, padding: 16 },
  profileImage: { alignSelf: "center", marginBottom: 16 },
  button: { marginTop: 16 },
  sectionTitle: { fontSize: 16, fontWeight: "bold" },
});

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.profileSection}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://picsum.photos/203" }}
          style={styles.profileImage}
        ></Avatar.Image>
        <Card>
          <Card.Content>
            <Text variant="titleLarge">Gabriel Luna</Text>
            <Text variant="bodyMedium">gabriel.luna@example.com</Text>
            <Text variant="bodyMedium">(11) 99999-9999</Text>
          </Card.Content>
        </Card>
        <Button mode="contained" style={styles.button}>
          Editar Perfil
        </Button>
        <List.Section>
          <List.Subheader style={styles.sectionTitle}>
            Configurações da Conta
          </List.Subheader>
          <List.Item
            title="Privacidade"
            left={() => <List.Icon icon="lock" />}
            onPress={() => {}}
          />
          <List.Item
            title="Notificações"
            left={() => <List.Icon icon="bell" />}
            onPress={() => {}}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
}
