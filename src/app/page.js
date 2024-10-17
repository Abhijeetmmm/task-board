
"use client"
import React, { useEffect } from 'react';
import Column from '../components/Column';

const Board = () => {
    const [columns, setColumns] = React.useState([
        { id: '1', name: 'To Do' },
        { id: '2', name: 'In Progress' },
        { id: '3', name: 'Done' }
    ]);

    const [tasks, setTasks] = React.useState(() => {
      return JSON.parse(localStorage.getItem('tasks')) || {};
  });
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

    const addTask = (columnId, taskName) => {
        setTasks((prevTasks) => {
            const newTask = { id: `${Date.now()}`, name: taskName };
            const columnTasks = prevTasks[columnId] || [];
            return {
                ...prevTasks,
                [columnId]: [...columnTasks, newTask]
            };
        });
    };

    return (
        <div className="board">
            {columns.map((column) => (
                <Column
                    key={column.id}
                    column={column}
                    tasks={tasks[column.id] || []}
                    addTask={addTask}
                />
            ))}
        </div>
    );
};

export default Board;

