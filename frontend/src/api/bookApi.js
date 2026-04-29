import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://testing-labs.onrender.com/api",
});

export const getBooks = () => API.get("/books");
export const getBookById = (id) => API.get(`/books/${id}`);
export const createBook = (bookData) => API.post("/books", bookData);
export const updateBook = (id, bookData) => API.put(`/books/${id}`, bookData);
export const deleteBook = (id) => API.delete(`/books/${id}`);

export default API;
