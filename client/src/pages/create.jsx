import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BOOK_SERVICE } from 'services/book-services';

const Create = () => {
  const navigate = useNavigate();

  const handleCreateFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
      name: formData.get('name'),
      author: formData.get('author'),
      price: parseFloat(formData.get('price')),
      description: formData.get('description'),
      image: formData.get('image')
    };

    const response = BOOK_SERVICE.createBook(book);
    if (response.success) {
      alert('Book creation failed');
      return;
    }

    alert('Book created successfully');
    navigate('/');

  };

  return (
    <section className='create'>
      <form onSubmit={handleCreateFormSubmit}>
        <h1 className='create__title'>Create a New Book</h1>
        <div className='create__form-control'>
          <label htmlFor='image'>Image*</label>
          <input
            type='text'
            id='image'
            name='image'
            required
            placeholder='Image URL'
          />
        </div>
        <div className='create__form-control'>
          <label htmlFor='name'>Name*</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder='Book Name'
          />
        </div>
        <div className='create__form-control'>
          <label htmlFor='author'>Author*</label>
          <input
            type='text'
            id='author'
            name='author'
            required
            placeholder='Book Author'
          />
        </div>
        <div className='create__form-control'>
          <label htmlFor='price'>Price*</label>
          <input
            type='number'
            id='price'
            name='price'
            required
            placeholder='Book Price'
          />
        </div>
        <div className='create__form-control'>
          <label htmlFor='description'>Description*</label>
          <textarea
            id='description'
            name='description'
            required
            placeholder='Book Description'
          />
        </div>
        <button className='create__submit-button' type='submit'>
          Create
        </button>
      </form>
    </section>
  );
};

export default Create;
