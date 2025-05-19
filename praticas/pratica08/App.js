import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./routes/StackNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
