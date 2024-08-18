import React, { useState } from 'react';
import api from '../../api';

function CreateCategory() {
  const [name, setName] = useState('');
  const [gstRate, setGstRate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/categories', { name, gstRate });
      alert('Category created successfully');
    } catch (error) {
      console.error("Error creating category:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Category Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" step="0.01" placeholder="GST Rate" value={gstRate} onChange={(e) => setGstRate(e.target.value)} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateCategory;
