import React from 'react';

const Task = ({ task }) => (
    <div className="task">
        {task.name}
    </div>
);

export default Task;
