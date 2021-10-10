import React, { createContext, useReducer } from 'react';

const initialState = [];
export const booksContext = createContext(initialState);
const { Provider } = booksContext;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'addBook':
      // const existingIndex = state.findIndex((u) => u.ocaid === payload.ocaid);
      const books = [...state];

      // if (existingIndex === -1) {
      books.push(payload);
      // } else {
      //   books.splice(existingIndex, 1, payload);
      // }
      return books;
    case 'setUsers':
      return payload;
    default:
      throw new Error();
  }
};

export const BooksProvider = ({ children }) => {
  const booksReducer = useReducer(reducer, []);
  return <Provider value={booksReducer}>{children}</Provider>;
};
