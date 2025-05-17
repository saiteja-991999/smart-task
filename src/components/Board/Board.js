import React from 'react';
import TaskCard from '../Task/TaskCard';

const Board = () => {
  const tasks = [
    { id: 1, title: 'Task 1', status: 'To Do' },
    { id: 2, title: 'Task 2', status: 'In Progress' }
  ];

  return (
    <div className="board">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Board;