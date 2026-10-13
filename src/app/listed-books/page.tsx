'use client';
import React, { useContext, useState } from 'react';
import BooksContext from '@/context/BooksContext';
import BookCard from '@/components/share/BookCard';
import { IBook } from '@/types/books.type';
import ListedBooksCard from '@/components/share/ListedBooks';

const ListedBooks = () => {
  const { readBooks, wishlistBooks } = useContext(BooksContext);

  const [shortBy, setShortBy] = React.useState<'rating' | 'pages' | 'year'>(
    'rating',
  );

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (shortBy === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (shortBy === 'pages') {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (shortBy === 'year') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedreadBooks = sortBooks(readBooks);
  const sortedWishlistBooks = sortBooks(wishlistBooks);

  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-black text-4xl text-center ">
        Listed Books
      </h2>

      <div className="text-center ">
        <select
          defaultValue="Pick a Runtime"
          className="select select-success"
          value={shortBy}
          onChange={e =>
            setShortBy(e.target.value as 'rating' | 'pages' | 'year')
          }
        >
          <option disabled={true}>Short By:</option>
          <option value={'rating'}>Rating</option>
          <option value={'pages'}>Number of pages</option>
          <option value={'year'}>Publisher year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Read Books (${sortedreadBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedreadBooks.length > 0 ? (
            sortedreadBooks.map((book: IBook) => {
              return <ListedBooksCard key={book.bookId} book={book} />;
            })
          ) : (
            <p>No read books available.</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Wishlist Books (${sortedWishlistBooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlistBooks.length > 0 ? (
            sortedWishlistBooks.map((book: IBook) => {
              return <ListedBooksCard key={book.bookId} book={book} />;
            })
          ) : (
            <p>No wishlist books available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
