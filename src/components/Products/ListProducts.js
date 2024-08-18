import React, { useEffect, useState } from 'react';
import api from '../../api';

function ListProducts() {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <h2>List of Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price} - {product.categoryName}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;
