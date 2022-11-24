import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItem = (
    <>
    <li>
    <Link
      to="/home"
      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/"
      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    >
      Features
    </Link>
  </li>
  <li>
    <Link
      to="/"
      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    >
      Blog
    </Link>
  </li>
  <li>
    <Link
      to="/"
      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    >
    Dashboard
    </Link>
    </li>

    </>  

  );

  const menuBtn = (
    <>
      <li>
          <Link
            to="/"
            className="btn btn-sm"
          >
            Sign In
          </Link>
       </li>

      <li>
          <Link
            to="/"
            className="btn btn-sm"
          >
            Sign Up
          </Link>
       </li>
    </>

  );

  return (
  <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="relative flex items-center justify-between">
    <Link
      to="/"
      className="inline-flex items-center"
    >
      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
      Laptop Lab
      </span>
    </Link>
    <ul className="flex items-center hidden space-x-8 lg:flex">
      {
        menuItem
      }     
    </ul>
    <ul className="flex items-center hidden space-x-8 lg:flex">
        {
        menuBtn
        }
    </ul>

    <div className="lg:hidden z-10">
      <button
        aria-label="Open Menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <Bars3Icon className='w-7 h-9'></Bars3Icon>
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full">
          <div className="p-5 bg-white border rounded shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Link
                  to="/"
                  aria-label="Company"
                  title="Company"
                  className="inline-flex items-center"
                >                    
                  <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
                    Laptop Lab
                  </span>
                </Link>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="p-2 -mt-2 -mr-2 transition duration-200 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >              
                  <XMarkIcon className="h-6 w-6 "/>

                </button>
              </div>
            </div>
            <nav>
              <ul className="space-y-4">
                {
                menuItem
                
                }
                {
                menuBtn
                }

              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default Navbar;