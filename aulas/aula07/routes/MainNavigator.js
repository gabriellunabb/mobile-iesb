import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CriarConta from "../screens/CriarConta";
import Login from "../screens/Login";
import RedefinirSenha from "../screens/RedefinirSenha";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="CriarConta" component={CriarConta}></Stack.Screen>
      <Stack.Screen
        name="RedefinirSenha"
        component={RedefinirSenha}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
