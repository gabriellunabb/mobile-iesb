import * as TaskService from "../services/TaskService";
import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    setTasks(await TaskService.getTasks());
  };

  const addTask = async (newTask) => {
    setTasks([...tasks, await TaskService.addTask(newTask)]);
  };

  const updateTask = async (task) => {
    await TaskService.updateTask(task.id, task);
    setTasks(tasks.map((task) => (task.id === task.id ? task : task)));
  };

  const deleteTask = async (taskId) => {
    await TaskService.deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
