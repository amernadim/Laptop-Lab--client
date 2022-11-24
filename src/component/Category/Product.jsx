import React from 'react';
// import { Link } from 'react-router-dom';
import {CheckBadgeIcon} from '@heroicons/react/24/solid'
import BookingModal from './BookingModal';

const Product = () => {
  return (


    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
<div className="space-y-4">
  <div className="space-y-2">
    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-52 dark:bg-gray-500" />
    <div className="flex items-center text-xs">
      <span>6 min ago</span>
    </div>
  </div>
  <div className="space-y-2">
    <div className="">
      <h3 className="text-xl font-semibold dark:text-violet-400">Model Name</h3>
    </div>
    <div className='flex flex-wrap gap-2'>
      <p>Location :</p>
      <p>Resale Price :</p>
      <p>Original Price :</p>
      <p>Year Of use :</p>
      <p>Publish Date :</p>
      </div>
      <div className='flex gap-2  items-center mt-4'>
        <p>Seller Name :</p>
        <span><CheckBadgeIcon className='w-6 h-4 text-blue-600'/></span>
      </div>
     <button className='text-red-600 hover:underline'>Report to Admin</button>
      <div className="mt-3 text-center">
          <label htmlFor="bookingModal" className="btn btn-sm">Book Now</label>
      </div>
      <BookingModal></BookingModal>
     </div>
   </div>
 </div>
  );
};

export default Product;