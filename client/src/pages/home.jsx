import { BookItem } from 'components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BOOK_SERVICE } from 'services/book-services';

const Home = () => {
  const [books, setBooks] = React.useState([]);

  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/create');
  };

  const handleUpdateClick = id => {
    navigate('/update/' + id);
  };

  const handleDeleteClick = id => {
    const response = window.confirm(
      'Are you sure you want to delete this book?'
    );
    if (response) {
      BOOK_SERVICE.deleteBook(id).then(() => {
        setBooks(books.filter(book => book.id !== id));
      });
    }
  };

  const getBooks = async () => {
    const { data } = await BOOK_SERVICE.getBooks();
    setBooks([...data]);
  };

  React.useEffect(() => {
    getBooks();
  }, []);

  return (
    <section className='home'>
      <h1 className='home__title'>Books Home</h1>
      <div className='home__books-container'>
        {books.map(book => (
          <BookItem
            key={book.id}
            book={book}
            onDeleteClick={handleDeleteClick}
            onUpdateClick={handleUpdateClick}
          />
        ))}
      </div>
      <button
        className='home__add-button'
        title='Add a New Book'
        onClick={handleAddClick}
      >
        +
      </button>
    </section>
  );
};

export default Home;
