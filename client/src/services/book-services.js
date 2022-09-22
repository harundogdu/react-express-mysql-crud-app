import axios from 'axios';
import CONSTANTS from 'constants';

const API_URL = CONSTANTS.API_URL + '/books';

const inheritance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const BOOK_SERVICE = {
  getBooks: () => inheritance.get('/'),
  getBook: id => inheritance.get(`/${id}`),
  createBook: book => inheritance.post('/create', book),
  updateBook: (id, book) => inheritance.put(`/update/${id}`, book),
  deleteBook: id => inheritance.delete(`/delete/${id}`) 
};