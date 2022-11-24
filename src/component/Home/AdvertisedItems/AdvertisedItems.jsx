import React from 'react';
import {CheckBadgeIcon} from '@heroicons/react/24/solid'

const AdvertisedItems = () => {
  return (
  <>
  <h2 className='text-center text-3xl font-semibold mt-5'> Advertised Item</h2>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto mt-5'>
      

      <div className="card bg-base-100 shadow-xl mx-auto">
        <figure className="px-5 pt-10">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Laptop Model</h2>
        <div className='flex flex-wrap gap-2'>
        <p>Resale Price</p>
        <p>Original Price</p>
        <p>Location</p>
        <p>Year Of use</p>
        <p>Publish Date</p>
        </div>
        </div>
      </div>
      
        
  </div>
  </>
  );
};

export default AdvertisedItems;