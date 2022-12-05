import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCategory = ({category}) => {
  const {category:cateroryName,categoryId,categoryImg} = category;
  const navigate = useNavigate()

   const handleNavigate = (id) => {
      navigate(`/category/${id}`)
   }
   
  return (
    // <div  onClick={() => handleNavigate(categoryId)} className='item flex gap-6 bg-white p-3 justify-center items-center px-6 rounded-sm m-2 w-full rounded-md hover:bg-gray-100 hover:shadow-lg mx-auto'>
    //   <img className='w-10 h-10' src={categoryImg} alt="" />
    //   <p className='text-2xl font-semibold '>{cateroryName}</p>
    // </div>

<div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
  <h2 className="card-title">Card title!</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
      
  );
};

export default ProductCategory;