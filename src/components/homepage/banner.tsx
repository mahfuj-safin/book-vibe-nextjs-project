import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="px-4 pt-10 pb-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-100 px-6 py-10 shadow-sm sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16">
        {/* Background Decoration */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl"></div>

        {/* Left Content */}
        <div className="relative z-10 space-y-6 text-center lg:text-left">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Discover Your Next Favorite
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Books to
            <span className="block text-emerald-600">Freshen Up</span>
            Your Bookshelf
          </h1>

          <p className="mx-auto max-w-lg text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
            Explore a world of stories, discover new perspectives, and find the
            perfect book to inspire your next adventure.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
            <button className="rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-700">
              Explore Books
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </button>

            <button className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition duration-300 hover:border-emerald-500 hover:text-emerald-700">
              Learn More
            </button>
          </div>

          {/* Small Trust Text */}
          <p className="pt-2 text-sm text-slate-500">
            Your next great read is waiting for you.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-3xl bg-emerald-200/40 blur-xl"></div>

          <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white p-3 shadow-xl shadow-slate-900/10">
            <Image
              src={bannerImage}
              alt="Bookshelf and reading inspiration"
              priority
              className="h-auto w-full rounded-xl object-cover transition duration-500 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
