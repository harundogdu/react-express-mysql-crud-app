export const createError = (status, message) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

export const availableEndpoints = [
  {
    method: 'GET',
    path: '/books',
    description: 'Get all books'
  },
  {
    method: 'GET',
    path: '/books/1',
    description: 'Get a single book'
  },
  {
    method: 'POST',
    path: '/create',
    description: 'Create a book'
  },
  {
    method: 'PUT',
    path: '/update/1',
    description: 'Update a book'
  },
  {
    method: 'DELETE',
    path: '/delete/1',
    description: 'Delete a book'
  }
];
