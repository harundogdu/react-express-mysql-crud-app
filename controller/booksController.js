import connection from '../config.js';
import { createError } from '../utils.js';

const BOOKS_CONTROLLER = {
  getBooks: (req, res, next) => {
    connection.query('SELECT * FROM books', (err, rows) => {
      if (err)
        return next(createError(500, 'Error retrieving books from database.'));

      return res.status(200).json(rows);
    });
  },
  getBook: (req, res, next) => {
    connection.query(
      `SELECT * FROM books WHERE id = ${req.params.id}`,
      (err, rows) => {
        if (err)
          return next(createError(500, 'Error retrieving book from database.'));

        return res.status(200).json(rows);
      }
    );
  },
  createBook: (req, res, next) => {
    const values = {
      name: req.body.name,
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      status: req.body.status || 'N'
    };

    connection.query('INSERT INTO books SET ?', [values], (err, data) => {
      if (err)
        return next(createError(500, 'Error creating book in database.'));
      return res.status(201).json({
        success: true,
        message: 'Book created successfully'
      });
    });
  },

  updateBook: (req, res, next) => {
    const bookId = req.params.id;
    const values = {
      name: req.body.name,
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      status: req.body.status || 'N'
    };

    connection.query(
      'UPDATE books SET ? WHERE id = ?',
      [values, bookId],
      (err, data) => {
        if (err)
          return next(createError(500, 'Error updating book in database.'));
        return res.status(200).json({
          success: true,
          message: 'Book updated successfully'
        });
      }
    );
  },

  deleteBook: (req, res, next) => {
    const bookId = req.params.id;
    connection.query(`DELETE FROM books WHERE id = ${bookId}`, (err, data) => {
      if (err)
        return next(createError(500, 'Error deleting book from database.'));
      return res.status(200).json({
        success: true,
        message: 'Book deleted successfully'
      });
    });
  }
};

export default BOOKS_CONTROLLER;
