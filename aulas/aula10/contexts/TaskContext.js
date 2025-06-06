import { createContext } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  return <TaskContext.Provider value="">{children}</TaskContext.Provider>;
}
export { TaskContext, TaskProvider };
