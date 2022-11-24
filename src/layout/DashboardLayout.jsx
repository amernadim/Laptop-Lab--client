import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../component/Shared/Navbar';

const DashboardLayout = () => {
  return (
    <div>
     <div>
      <Navbar/>
      <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
      <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
      {/* <!-- Sidebar content here --> */}
        <li className='btn btn-md mt-2'><Link className='' to="">My Order</Link></li>
        <li className='btn btn-md mt-2'><Link to="">Add A Product</Link></li>
        <li className='btn btn-md mt-2'><Link to="">All Sellers</Link></li>      
        <li className='btn btn-md mt-2'><Link to="">All User</Link></li>      
    </ul> 
   </div>
  </div>     
    </div>
    </div>
  );
};

export default DashboardLayout;