import { Text, View } from "react-native";

export default function Flexbox() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 8,
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            width: 50,
            borderRadius: 16,
          }}
        ></View>
        <Text>Favoritos</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 8,
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            width: 50,
            borderRadius: 16,
          }}
        ></View>
        <Text>Recentes</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 8,
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            height: 50,
            width: 50,
            borderRadius: 16,
          }}
        ></View>
        <Text>Contatos</Text>
      </View>
    </View>
  );
}
