import React, { useState, useEffect } from 'react';
import api from '../../api';

function RecordSale() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [products, setProducts] = useState([]);
  const [bill, setBill] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error.response.data);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    try {
      const response = await api.get(`/products/${productId}`);
      const product = response.data;
      const tax = (product.price * product.gstRate) / 100;
      const totalPrice = (product.price + tax) * quantity;
      setBill([...bill, { product, quantity, totalPrice }]);
    } catch (error) {
      console.error("Error adding product to sale:", error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/sales', bill);
      alert('Sale recorded successfully');
    } catch (error) {
      console.error("Error recording sale:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Record Sale</h2>
      <form onSubmit={handleSubmit}>
        <select value={productId} onChange={(e) => setProductId(e.target.value)} required>
          <option value="">Select Product</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </select>
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="button" onClick={handleAddProduct}>Add Product</button>
        <button type="submit">Submit Sale</button>
      </form>
      <h3>Bill</h3>
      <ul>
        {bill.map((item, index) => (
          <li key={index}>{item.product.name} - Quantity: {item.quantity} - Total Price: {item.totalPrice.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecordSale;
