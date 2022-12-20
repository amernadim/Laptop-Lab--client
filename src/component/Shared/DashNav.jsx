import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/laptop.png';
import { XMarkIcon, Bars3Icon, PlayIcon } from "@heroicons/react/24/solid";

const DashNav = () => {
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
       
        {/* dashboard open icon */}
        <label
          tabIndex={2}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <Bars3Icon className="w-7 h-9"></Bars3Icon>
        </label>     
      </div>
    </div>
  );
};

export default DashNav;