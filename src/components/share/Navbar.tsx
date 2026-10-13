import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/book.ico';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/" className="font-medium hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href="/books" className="font-medium hover:text-primary">
          Books
        </Link>
      </li>
      <li>
        <Link href="/listed-books" className="font-medium hover:text-primary">
          Listed Books
        </Link>
      </li>
      <li>
        <Link href="/read-books" className="font-medium hover:text-primary">
          Read Books
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur-md">
      <div className="navbar container mx-auto min-h-20 px-4 lg:px-6">
        {/* Navbar Start: Logo */}
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <button
              tabIndex={0}
              type="button"
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
          >
            <Image
              src={logo}
              alt="Book Vibe Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />

            <span className="text-xl font-extrabold tracking-tight text-base-content sm:text-2xl">
              Book <span className="text-primary">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End: Authentication Buttons */}
        <div className="navbar-end gap-2">
          <Link
            href="/login"
            className="btn btn-ghost hidden rounded-xl px-5 sm:inline-flex"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="btn btn-primary rounded-xl px-4 text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
