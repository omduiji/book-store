import './styles.css';
import { useContext } from 'react';
import { booksContext } from '../../store';

function BookItem() {
  const [books] = useContext(booksContext);
  return (
    <div>
      {books.map((book, index) => (
        <article className="bookItem" key={index}>
          <div className="bookHeader">
            <h2>
              {book.title}({book.year})
            </h2>
            <p>{book.authors}</p>
            <button>Edit</button>
          </div>
          <p>{book.description}</p>
        </article>
      ))}
    </div>
  );
}

export default BookItem;
