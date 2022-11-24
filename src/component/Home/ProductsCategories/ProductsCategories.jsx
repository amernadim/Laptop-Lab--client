import React from 'react';
import laptop from '../../../assets/image/laptop.png';

const ProductsCategories = () => {
  return (
    <div className='mt-5'>
      <h2 className='text-center text-3xl font-semibold mt-5'>Laptop Categories</h2>
      <div className='cetegorise md:flex justify-between w-11/12 mx-auto gap-2 mt-5 max-lg:2xl'>

      <div className='item flex gap-6 bg-neutral p-3 justify-center items-center px-6 rounded-sm m-2 w-full'>
        <img className='w-10 h-10' src={laptop} alt="" />
        <p className='text-2xl font-semibold text-white'>DELL</p>
      </div>

      <div className=' flex gap-6 bg-neutral p-3 justify-center items-center px-6 rounded-sm m-2 w-full'>
        <img className='w-10 h-10' src={laptop} alt="" />
        <p className='text-2xl font-semibold text-white'>HP</p>
      </div>

      <div className=' flex gap-6 bg-neutral p-3 justify-center items-center px-6 rounded-sm m-2 w-full'>
        <img className='w-10 h-10' src={laptop} alt="" />
        <p className='text-2xl font-semibold text-white'>LENOVO</p>
      </div>

      </div>
      
    </div>
  );
};

export default ProductsCategories;