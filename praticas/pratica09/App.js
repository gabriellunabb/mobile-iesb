import { SafeAreaProvider } from "react-native-safe-area-context";
import { StoreProvider } from "./contexts/StoreContext";
import MainNavigator from "./routes/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <NavigationContainer>
          <MainNavigator></MainNavigator>
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
}
