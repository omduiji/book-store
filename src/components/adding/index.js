import './styles.css';
import { useState, useContext } from 'react';
import { booksContext } from '../../store';

function Adding() {
  const [, dispatch] = useContext(booksContext);

  const [bookId, setBookId] = useState('');
  const addNewBook = (e) => {
    e.preventDefault();
    if (getBookIdData(bookId)) {
    }
  };
  const getBookIdData = async (id) => {
    const getDetails = await fetch(
      `https://openlibrary.org/books/${id}.json
`
    );
    const res = await getDetails.json();
    if (getDetails.status === 200) {
      dispatch({
        type: 'addBook',
        payload: await hydrateResponse(res),
      });
      // console.log(books, 'books');
    }
  };
  const hydrateResponse = async (data) => {
    let finalData = {
      id: data.ocaid,
      title: data.title,
      year: data.publish_date,
      description: data?.description?.value || '',
      // authors: await getAuthors(data.authors),
      authors: data.by_statement,
    };
    return finalData;
  };
  // const getAuthors = async (authors) => {
  //   console.log(authors);
  //   let urls = authors.map((item) => `https://openlibrary.org${item.key}.json`);
  //   const allPromises = await Promise.all(
  //     urls.map((item) => fetch(item, { mode: 'no-cors' }))
  //   );
  //   console.log(allPromises);
  //   let [authorsList] = await Promise.all(allPromises.map((r) => r.json()));
  // };
  return (
    <div className="adding">
      <form>
        <label htmlFor="book">Add a book by Open Library ID Number:</label>
        <div className="inputsWrapper">
          <input
            name="book"
            type="text"
            placeholder="OLID"
            className="input"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          ></input>
          <button className="addBtn" onClick={addNewBook}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adding;
