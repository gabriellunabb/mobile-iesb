import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import StoreScreen from "../screens/StoreScreen";

const Stack = createNativeStackNavigator();

export default function SearchNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categorias" component={CategoryScreen}></Stack.Screen>
      <Stack.Screen name="Lojas" component={StoreScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
