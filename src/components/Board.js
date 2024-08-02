// src/pages/Board.js
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../styles/Board.css';

// Dados mockados
const mockData = [
  {
    id: "1",
    title: "Comprar leite",
    text: "Comprar leite no supermercado.",
    data: "2024-08-01",
    status: "3", // Status 3 corresponde à coluna "In Progress"
    priority: "3", // Prioridade 2 será mapeada para "Média"
    dueDate: "2024-08-05",
    createdAt: "2024-07-31T12:00:00Z",
    updatedAt: "2024-08-01T08:30:00Z",
    resolved: true,
  },
  {
    id: "2",
    title: "Estudar JS",
    text: "Estudar no novo curso",
    data: "2024-08-01",
    status: "1",
    priority: "1",
    dueDate: "2024-03-02",
    createdAt: "2024-07-31T12:00:00Z",
    updatedAt: "2024-08-01T08:30:00Z",
    resolved: false,
  },
  // Adicione mais objetos aqui se necessário
];

const Board = () => {
  const [tasks, setTasks] = useState([]);

  // Função para buscar as tarefas (mockado)
  const fetchTasks = async () => {
    try {
      // Simulando uma chamada de rede com dados mockados
      const data = mockData;
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // Chama a função fetchTasks quando o componente for montado
  useEffect(() => {
    fetchTasks();
  }, []);

  // Mapeamento de prioridades para cores de fundo e descrição
  const priorityMap = {
    1: { color: "lightgreen", text: "Baixa" },  // Prioridade baixa
    2: { color: "lightblue", text: "Média" },   // Prioridade média
    3: { color: "red", text: "Alta" },          // Prioridade alta
  };

  const columns = [[], [], [], []];
  tasks.forEach((task) => {
    if (task.status >= 1 && task.status <= 4) {
      columns[task.status - 1].push(task);
    }
  });

  const columnTitles = ["Todo", "Active", "In Progress", "Completed"];
  return (
    <div className="board">
      {columns.map((column, index) => (
        <div key={index} className="column">
          <h2 className="column-title">{columnTitles[index]}</h2>
          {column.map((task) => (
            <div key={task.id}>
              <Card
                title={task.title}
                content={task.text}
                footer={task.data}
                priorityText={priorityMap[task.priority].text} // Passa o texto da prioridade
                priorityBackgroundColor={priorityMap[task.priority].color} // Passa a cor de fundo da prioridade
              />
            </div>
          ))}
        </div>
      ))}
      <button className="floating-button">+</button>
    </div>
  );
};

export default Board;
