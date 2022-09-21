import express from 'express';
import dotenv from 'dotenv';
import connection from './config.js';
import BooksRouter from './router/booksRouter.js';
import { availableEndpoints } from './utils.js';

/* define initialize */
const app = express();
dotenv.config();

/* Database connection */
connection.connect(err => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

/* router */
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to RESTHub crafted with love!',
    availableEndpoints
  });
});
/* books endpoint */
app.use('/books', BooksRouter);

/* error handling */
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  const stack = err.stack || '';
  return res.status(status).json({
    success: false,
    status,
    message,
    stack
  });
});

/* 404 Routes */
app.use((req, res) => {
  res.json({
    success: false,
    status: 404,
    message: 'Route Not Found'
  });
});

/* port */
app.listen(process.env.PORT || 1923, function () {
  console.log('Express server listening on port %d', this.address().port);
});
