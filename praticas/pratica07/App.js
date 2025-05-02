import BottomTabNavigator from "./routes/BottomTabNavigator";
import DrawerNavigator from "./routes/DrawerNavigator";
import StackNavigator from "./routes/StackNavigator";
import TopTabNavigator from "./routes/TopTabNavigator";

const { NavigationContainer } = require("@react-navigation/native");
const { SafeAreaProvider } = require("react-native-safe-area-context");

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
