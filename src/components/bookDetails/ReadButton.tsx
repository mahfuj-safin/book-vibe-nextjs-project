'use client';
import BooksContext from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    // Implement the logic to read the book here
    console.log('Read button clicked', book);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"!`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        className="btn btn-outline btn-primary rounded-xl px-6"
        onClick={() => handleReadBook()}
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
