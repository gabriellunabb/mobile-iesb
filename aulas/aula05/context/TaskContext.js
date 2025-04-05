import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProvider(props) {
  const [tarefas, setTarefas] = useState([
    { id: 0, nome: "tarefa1", concluida: false },
    { id: 1, nome: "tarefa2", concluida: true },
    { id: 2, nome: "tarefa3", concluida: false },
    { id: 3, nome: "tarefa4", concluida: true },
    { id: 4, nome: "tarefa5", concluida: false },
    { id: 5, nome: "tarefa6", concluida: false },
    { id: 6, nome: "tarefa7", concluida: false },
    { id: 7, nome: "tarefa8", concluida: false },
    { id: 8, nome: "tarefa9", concluida: false },
    { id: 9, nome: "tarefa10", concluida: false },
    { id: 10, nome: "tarefa11", concluida: false },
    { id: 11, nome: "tarefa12", concluida: false },
    { id: 12, nome: "tarefa12", concluida: false },
    { id: 13, nome: "tarefa12", concluida: false },
    { id: 14, nome: "tarefa12", concluida: false },
    { id: 15, nome: "tarefa12", concluida: false },
    { id: 16, nome: "tarefa12", concluida: false },
    { id: 17, nome: "tarefa12", concluida: false },
    { id: 18, nome: "tarefa12", concluida: false },
  ]);

  const adicionarTarefa = (nomeTarefa) => {
    if (nomeTarefa) setTarefas([...tarefas, { id: Math.random(), nome: nomeTarefa, concluida: false }]);
  };

  const removerTarefa = (tarefa) => {
    if (tarefa) setTarefas(tarefas.filter((item) => item.id != tarefa.id));
  };

  return (
    <TaskContext.Provider value={{ tarefas, adicionarTarefa, removerTarefa }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
