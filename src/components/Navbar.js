import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('apiKey');
    window.location.href = '/login';
  };

  return (
    <nav>
      <Link to="/categories">Manage Categories</Link>
      <Link to="/products">Manage Products</Link>
      <Link to="/sales">Record Sales</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
