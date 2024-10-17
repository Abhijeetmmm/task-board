import React from 'react';
import Task from './Task';

const Column = ({ column, tasks, addTask }) => {
    const [taskName, setTaskName] = React.useState('');

    const handleAddTask = () => {
        if (taskName) {
            addTask(column.id, taskName);
            setTaskName('');
        }
    };

    return (
        <div className="column">
            <h2>{column.name}</h2>
            <div className="tasks">
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={handleAddTask} className="tasks1">Add Task</button>
        </div>
    );
};

export default Column;
