import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface iListedBooksProps {
  book: IBook;
}
const ListedBooksCard = ({ book }: iListedBooksProps) => {
  return (
    <div className="card card-side flex-col md:flex-row bg-base-100 border border-base-300 shadow-sm">
      {/* Book Image */}
      <figure className="w-full shrink-0 bg-base-200 p-5 md:w-56">
        <Image
          src={book.image}
          alt={book.bookName}
          width={200}
          height={250}
          className="h-52 w-full rounded-lg object-contain md:h-60"
        />
      </figure>

      {/* Book Information */}
      <div className="card-body gap-3">
        <h2 className="card-title text-xl font-bold">{book.bookName}</h2>

        <p className="text-sm text-base-content/70">By: {book.author}</p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold">Tag:</span>

          {book.tags?.map((tag: string) => (
            <span key={tag} className="badge badge-outline badge-success">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-base-content/70">
          <p>Category: {book.category}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Year: {book.yearOfPublishing}</p>
        </div>

        <div className="divider my-1" />

        <div className="card-actions items-center justify-between">
          <p className="text-sm">⭐ Rating: {book.rating}</p>

          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-primary btn-sm rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
