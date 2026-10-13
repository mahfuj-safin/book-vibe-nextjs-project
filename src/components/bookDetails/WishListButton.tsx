'use client';
import BooksContext from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlistBooks, setWishlistBooks } = useContext(BooksContext);

  const handleAddToWishList = () => {
    // Implement the logic to add the book to the wishlist here
    console.log('Wishlist button clicked', book);
    setWishlistBooks([...wishlistBooks, book]);
    toast.success(`"${book.bookName}" has been added to your wishlist !`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        className="btn btn-outline rounded-xl px-6"
        onClick={() => handleAddToWishList()}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
