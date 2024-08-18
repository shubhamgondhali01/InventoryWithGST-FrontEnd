import React, { useEffect, useState } from 'react';
import api from '../../api';

function ViewSales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await api.get('/sales');
        setSales(response.data);
      } catch (error) {
        console.error("Error fetching sales:", error.response.data);
      }
    };
    fetchSales();
  }, []);

  return (
    <div>
      <h2>View Sales</h2>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>Product ID: {sale.productId} - Quantity: {sale.quantity} - Total Price: {sale.totalPrice.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewSales;
