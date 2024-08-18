import React, { useEffect, useState } from 'react';
import api from '../../api';

function ListCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error.response.data);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h2>List of Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name} - {category.gstRate}%</li>
        ))}
      </ul>
    </div>
  );
}

export default ListCategories;
