import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCategory = ({category}) => {
  const {category:cateroryName,categoryId,categoryImg} = category;
  const navigate = useNavigate()

   const handleNavigate = (id) => {
      navigate(`/category/${id}`)
   }
   
  return (
    <div  onClick={() => handleNavigate(categoryId)} className='item flex gap-6 bg-white p-3 justify-center items-center px-6 rounded-sm m-2 w-full rounded-md hover:bg-gray-100 hover:shadow-lg mx-auto'>
      <img className='w-10 h-10' src={categoryImg} alt="" />
      <p className='text-2xl font-semibold '>{cateroryName}</p>
    </div>
      
  );
};

export default ProductCategory;