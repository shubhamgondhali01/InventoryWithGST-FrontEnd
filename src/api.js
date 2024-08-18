import axios from 'axios';

// Base API URL
const API_URL = '/users';

// Register
export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Registration failed');
  }
};

// Login
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;  // This should include the API key
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};
