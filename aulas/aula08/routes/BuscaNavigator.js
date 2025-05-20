import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categorias from "../screens/Categorias";
import Lojas from "../screens/Lojas";

const Stack = createNativeStackNavigator();

export default function BuscaNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={Categorias}></Stack.Screen>
      <Stack.Screen name="Lojas" component={Lojas}></Stack.Screen>
    </Stack.Navigator>
  );
}
