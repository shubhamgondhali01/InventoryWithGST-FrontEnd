import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateCategory from './components/Categories/CreateCategory';
import ListCategories from './components/Categories/ListCategories';
import CreateProduct from './components/Products/CreateProduct';
import ListProducts from './components/Products/ListProducts';
import RecordSale from './components/Sales/RecordSale';
import ViewSales from './components/Sales/ViewSales';

function App() {
  const isLoggedIn = localStorage.getItem('apiKey');

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories" element={<CreateCategory />} />
        <Route path="/list-categories" element={<ListCategories />} />
        <Route path="/products" element={<CreateProduct />} />
        <Route path="/list-products" element={<ListProducts />} />
        <Route path="/sales" element={<RecordSale />} />
        <Route path="/view-sales" element={<ViewSales />} />
      </Routes>
    </Router>
  );
}

export default App;
