import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon, PlayIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import logo from '../../assets/image/laptop.png';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("LogOut success");
      })
      .catch((error) => console.log(error));
  };

  const menuItem = (
    <>
      <li>
        <Link
          to="/home"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-500"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-500"
        >
          About Us
        </Link>
      </li>
      {user?.uid && (
        <li>
          <Link
            to="/dashboard"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-500"
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  const menuBtn = (
    <>
      {user?.email ? (
        <li>
          <button
            onClick={handleLogout}
            className="btn btn-sm bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white"
          >
            LogOut
          </button>
        </li>
      ) : (
        <>
          <li>
            <Link to="/signIn" className="btn btn-sm btn-outline">
              Sign In
            </Link>
          </li>

          <li>
            <Link to="/signUp" className="btn btn-sm">
              Sign Up
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="px-4 py-5 mx-auto fixed top-0 w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-base-200 z-40">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
        <img src={logo} alt="" className="w-8 h-8"/>
        <Link to="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Laptop Lab
          </span>
        </Link>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {menuItem}
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {menuBtn}
        </ul>

        {/* dashboard open icon */}
        {/* <label
          tabIndex={2}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <PlayIcon className="w-6 h-6" />
        </label> */}

        <div className="lg:hidden z-20">
          <button aria-label="Open Menu" onClick={() => setIsMenuOpen(true)}>
            <Bars3Icon className="w-7 h-9"></Bars3Icon>
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
                      <XMarkIcon className="h-6 w-6 " />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {menuItem}
                    {menuBtn}
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
