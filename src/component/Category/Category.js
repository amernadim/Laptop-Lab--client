import React from 'react';
import Product from './Product';


const Category = () => {
  return (
    <div className='w-11/12 mx-auto my-5'>

      <div>
      <h2 className='text-center text-2xl font-semibold mt-5'>Brand Name</h2>
      </div>

      <div className='products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto'>
      <Product></Product>
      </div>

    </div>
  );
};

export default Category;