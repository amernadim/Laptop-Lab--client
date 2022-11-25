import React from 'react';
import laptop from '../../../assets/image/laptop.png';

const ProductCategory = ({category}) => {
  const {category:cateroryName,categoryId,categoryImg} = category;
  return (
    <div className='item flex gap-6 bg-white p-3 justify-center items-center px-6 rounded-sm m-2 w-full rounded-md'>
      <img className='w-10 h-10' src={categoryImg} alt="" />
      <p className='text-2xl font-semibold '>{cateroryName}</p>
    </div>
      
  );
};

export default ProductCategory;