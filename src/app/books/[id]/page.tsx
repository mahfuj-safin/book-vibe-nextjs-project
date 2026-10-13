export const instant = false;
import React from 'react';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
interface IBooksDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  'use cache';
  const res = await fetch('http://localhost:3000/booksData.json');

  const books = await res.json();
  return books;
};

const BooksDetailPage = async ({ params }: IBooksDetailPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side overflow-hidden bg-base-100 border border-base-300/60 shadow-xl rounded-2xl">
        <figure className="bg-base-200 p-6 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={400}
            className="w-full h-80 lg:h-full max-h-[480px] object-contain rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <div className="card-body gap-5 lg:p-8">
          {/* Category and Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="badge badge-primary badge-outline px-4 py-3 font-medium">
              {book.category}
            </span>

            <div className="flex items-center gap-2 rounded-full bg-warning/10 px-3 py-2">
              <span className="text-warning">★</span>
              <span className="font-bold">{book.rating}</span>
              <span className="text-xs text-base-content/60">/ 5</span>
            </div>
          </div>

          {/* Book Name */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              {book.bookName}
            </h2>

            <p className="mt-3 text-base text-base-content/60">
              Written by{' '}
              <span className="font-semibold text-primary">{book.author}</span>
            </p>
          </div>

          {/* Review */}
          <div className="border-l-4 border-primary pl-4 py-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-2">
              About this book
            </h3>

            <p className="text-sm leading-7 text-base-content/75">
              {book.review}
            </p>
          </div>

          {/* Book Information */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-xl bg-base-200/70 p-4">
              <p className="text-xs text-base-content/60 mb-2">Total Pages</p>
              <p className="text-xl font-bold">{book.totalPages}</p>
            </div>

            <div className="rounded-xl bg-base-200/70 p-4">
              <p className="text-xs text-base-content/60 mb-2">Published</p>
              <p className="text-xl font-bold">{book.yearOfPublishing}</p>
            </div>

            <div className="rounded-xl bg-base-200/70 p-4 col-span-2 sm:col-span-1">
              <p className="text-xs text-base-content/60 mb-2">Publisher</p>
              <p className="text-sm font-bold break-words">{book.publisher}</p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Book Tags</h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge badge-ghost border border-base-300 px-3 py-3"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="card-actions justify-end mt-2 flex-wrap">
            <ReadButton book={book}></ReadButton>
            <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailPage;
