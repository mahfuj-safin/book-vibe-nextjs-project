import Image from 'next/image';
import React from 'react';
import { IBook } from '@/types/books.type';
import Link from 'next/link';

interface IBookCardProps {
  book: IBook;
}

function BookCard({ book }: IBookCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-5">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300}
          height={400}
          className="h-full max-w-full rounded-md object-contain shadow-md transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm">
          {book.category}
        </span>

        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-sm">
          <span className="text-amber-500">★</span>
          {book.rating}
        </div>
      </div>

      {/* Book Information */}
      <div className="p-5">
        <h2 className="line-clamp-1 text-lg font-bold text-gray-900 transition group-hover:text-indigo-600">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">By {book.author}</p>

        <div className="my-4 flex items-center justify-between border-y border-gray-100 py-3 text-sm">
          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 font-medium text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">Total Pages</p>
            <p className="mt-1 font-medium text-gray-700">{book.totalPages}</p>
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          View Book Details
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
