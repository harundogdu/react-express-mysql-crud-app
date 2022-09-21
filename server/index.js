import express from 'express';
import dotenv from 'dotenv';
import connection from './config.js';
import BooksRouter from './router/booksRouter.js';

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
    avaibleEndpoints: [
      {
        method: 'GET',
        path: '/books',
        description: 'Get all books'
      }
    ]
  });
});
app.use('/books', BooksRouter);

/* port */
app.listen(process.env.PORT || 1923, function () {
  console.log('Express server listening on port %d', this.address().port);
});
