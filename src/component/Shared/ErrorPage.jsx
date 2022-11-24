import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/image/errorpage.png';

const ErrorPage = () => {
  return (
    <div>
      <div className='relative w-full h-full'>
        <img className='w-full h-full object-cover' src={ErrorImg} alt="" />
      </div>
      <div className='absolute top-1'>
        <Link className='btn btn-wide bg-error text-white' to='/'>Back Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;