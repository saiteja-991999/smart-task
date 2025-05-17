import React from 'react';
import Board from '../components/Board/Board';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SmartTask Dashboard</h1>
      <Board />
    </div>
  );
};

export default Dashboard;