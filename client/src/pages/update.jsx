import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BOOK_SERVICE } from 'services/book-services';

const Update = () => {
  const [book, setBook] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleUpdateFormSubmit = event => {
    const bookId = location.pathname.split('/')[2];
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
      name: formData.get('name'),
      author: formData.get('author'),
      price: parseFloat(formData.get('price')),
      description: formData.get('description'),
      image: formData.get('image')
    };

    const response = BOOK_SERVICE.updateBook(bookId, book);
    if (response.success) {
      alert('Book update failed');
      return;
    }

    alert('Book updated successfully');
    navigate('/');
  };

  const fetchBook = useCallback(async () => {
    const bookId = location.pathname.split('/')[2];
    const response = await BOOK_SERVICE.getBook(bookId);
    if (response.status === 200) {
      if (response.data.length === 0) {
        navigate('/');
      }
      setBook(response.data[0]);
    }
  }, [location.pathname, navigate]);

  React.useEffect(() => {
    fetchBook();

    return () => {
      setBook(null);
    };
  }, [fetchBook]);

  return (
    <section className='create'>
      <form onSubmit={handleUpdateFormSubmit}>
        <h1 className='create__title'>Update a New Book</h1>
        <div className='create__form-control'>
          <label htmlFor='image'>Image*</label>
          <input
            type='text'
            id='image'
            name='image'
            required
            placeholder='Image URL'
            defaultValue={book?.image}
          />
        </div>
        <div className='create__form-control'>
          <label htmlFor='status'>Status*</label>
          <select name='status' id='status' defaultValue={book?.status}>
            <option value='N' selected={`${book?.status === 'N'}`}>
              Unavailable
            </option>
            <option value='Y' selected={`${book?.status === 'Y'}`}>
              Available
            </option>
          </select>
        </div>
        <div className='create__form-control'>
          <label htmlFor='name'>Name*</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder='Book Name'
            defaultValue={book?.name}
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
            defaultValue={book?.author}
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
            defaultValue={book?.price}
          />
        </div>
        <div className='create__form-control'>
          <label htmlFor='description'>Description*</label>
          <textarea
            id='description'
            name='description'
            required
            placeholder='Book Description'
            defaultValue={book?.description}
          />
        </div>
        <button className='create__submit-button' type='submit'>
          Update
        </button>
      </form>
    </section>
  );
};

export default Update;
