import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreen";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <TaskScreen />
      </TaskProvider>
    </SafeAreaProvider>
  );
}
