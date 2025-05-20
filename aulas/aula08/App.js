import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./routes/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator></MainNavigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
