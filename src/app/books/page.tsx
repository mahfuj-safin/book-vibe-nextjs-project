import BookCard from '@/components/share/BookCard';
import { IBook } from '@/types/books.type';

const getBooks = async () => {
  'use cache';
  const res = await fetch('http://localhost:3000/booksData.json');

  const books = await res.json();
  return books;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-17.5 px-4">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Discover Your Next Read
        </p>

        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Explore All Books
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-gray-500">
          Find your next favorite book from our collection of timeless stories
          and inspiring ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book: IBook, index: number) => {
          return <BookCard key={index} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
