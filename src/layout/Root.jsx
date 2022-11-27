import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer';
import Navbar from '../component/Shared/Navbar';

const Root = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-[72px]'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Root;