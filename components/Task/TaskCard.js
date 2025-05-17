import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-3 border-l-4 border-blue-500">
      <h4 className="font-medium">{task.title}</h4>
      <p className="text-sm text-gray-500">Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;