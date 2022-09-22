import React from 'react';

const BookItem = ({ book, onDeleteClick, onUpdateClick }) => {
  return (
    <div className='book'>
      <div className='book__image'>
        <img src={book.image} alt={book.name} />
      </div>
      <div className='book__content'>
        <div className='book__name'>{book.name}</div>
        <div className='book__author'>{book.author}</div>
        <div className='book__price'>{book.price}$</div>
        <div className='book__description'>{book.description}</div>
      </div>
      <div className='book__actions'>
        <button
          className='book__actions-update'
          onClick={() => onUpdateClick(book.id)}
        >
          Update
        </button>
        <button
          className='book__actions-delete'
          onClick={() => onDeleteClick(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
