import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        26 Nov 2022
      </p>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <Link
            to="/"
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-orange-400 sm:text-4xl"
          >
           Laptop Lab is a worldwide wholesaler and exporter of refurbished and used Laptop in bulk quantities.
          </Link>
        </div>
      </div>
      <div className="mb-10 sm:text-center">
        <a href="/" aria-label="Author" className="inline-block mb-1">
          <img
            alt="avatar"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </a>
        <div>
          <Link
            to="/"
            aria-label="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Aminul Islam
          </Link>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
      <div className="sm:text-center">
        <Link
          to="/"
          aria-label=""
          className="inline-flex px-4 py-2 rounded-md items-center font-semibold bg-gradient-to-br from-lime-500 via-lime-600 to-green-700 text-white"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default About;