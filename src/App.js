import './App.css';
import Adding from './components/adding';
import BookItem from './components/bookItem';
import Filtering from './components/filtering';
import { BooksProvider } from '../src/store';
// import { useState } from 'react';

function App() {
  // const [Books, setBooks] = useState([]);
  // useEffect(() => {
  //   const getBooks = async () => {
  //     const res = await fetch('https://openlibrary.org/works/OL45883W.json');
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   getBooks();
  // }, []);
  return (
    <BooksProvider>
      <div className="App">
        <h1>Book Manager</h1>
        <Adding></Adding>
        <Filtering></Filtering>
        <BookItem></BookItem>
      </div>
    </BooksProvider>
  );
}

export default App;
