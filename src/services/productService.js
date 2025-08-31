import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const getProducts = () => {
  return axios.get(API_URL);
};

const getProduct = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export default { getProducts, getProduct };
