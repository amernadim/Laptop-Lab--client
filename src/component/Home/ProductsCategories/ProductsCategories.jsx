import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCategory from './ProductCategory';

const ProductsCategories = () => {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/categories')
    .then(res => {
        const datas = res?.data;
        setCategories(datas) 
        // console.log(datas);    
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
  
    })
  },[])
 
  return (
    <div className='mt-5'>
      <h2 className='text-center text-3xl font-semibold mt-5'>Laptop Categories</h2>
      <div className='cetegorise md:flex justify-between w-11/12 mx-auto gap-2 mt-5 max-lg:2xl'>
     {
      categories.map((category,i) =><ProductCategory 
      key={i}
      category={category}
      ></ProductCategory> )
     }
      </div>
      
    </div>
  );
};

export default ProductsCategories;