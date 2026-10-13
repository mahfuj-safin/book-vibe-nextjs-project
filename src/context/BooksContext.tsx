'use client';
import React, { createContext, useState, ReactNode } from 'react';

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlistBooks,
    setWishlistBooks,
  };
  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksContext;
export { BooksProvider };
