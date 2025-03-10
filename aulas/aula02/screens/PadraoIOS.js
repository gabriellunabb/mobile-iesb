import { Text, View } from "react-native";

export default function PadraoIOS() {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View
        style={{
          height: 64,
          backgroundColor: "lightgray",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            paddingTop: 18,
          }}
        >
          Meu App
        </Text>
      </View>
      <View
        style={{
          height: 64,
          backgroundColor: "lightgray",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
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
    </View>
  );
}
