import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/categories">Manage Categories</Link>
      <Link to="/products">Manage Products</Link>
      <Link to="/sales">Record Sales</Link>
    </div>
  );
}

export default Dashboard;
