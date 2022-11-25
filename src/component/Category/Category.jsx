import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';


const Category = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className='w-11/12 mx-auto my-5'>
      <div>
      <h2 className='text-center text-2xl font-semibold mt-5'>Laptop</h2>
      </div>

      <div className='products grid grid-cols-1 md:grid-cols-2 gap-3 w-11/12 mx-auto'>
      {
        data.map(product => <Product
        key={product._id}
        product={product}
        ></Product> )
      }

     
      </div>

    </div>
  );
};

export default Category;