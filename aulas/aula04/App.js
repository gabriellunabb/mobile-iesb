import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ContactScreen from "./screens/ContactScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ContactScreen></ContactScreen>
    </SafeAreaProvider>
  );
}
