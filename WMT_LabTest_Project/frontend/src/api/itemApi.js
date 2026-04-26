import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getItems = () => API.get("https://wmt-test-qm5n.onrender.com/items");
export const getItemById = (id) => API.get(`https://wmt-test-qm5n.onrender.com/items/${id}`);
export const createItem = (itemData) => API.post("https://wmt-test-qm5n.onrender.com/items", itemData);
export const updateItem = (id, itemData) => API.put(`https://wmt-test-qm5n.onrender.com/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`https://wmt-test-qm5n.onrender.com/items/${id}`);
export default API;