import express from 'express';
import BOOKS_CONTROLLER from '../controller/booksController.js';

const Router = express.Router();

Router
    .get('/', BOOKS_CONTROLLER.getBooks)
    .get('/:id', BOOKS_CONTROLLER.getBook)
    .post('/create', BOOKS_CONTROLLER.createBook)
    .put('/update/:id', BOOKS_CONTROLLER.updateBook)
    .delete('/delete/:id', BOOKS_CONTROLLER.deleteBook);

export default Router;
