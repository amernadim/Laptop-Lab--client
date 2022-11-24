import React from 'react';
import {CheckBadgeIcon} from '@heroicons/react/24/solid';

const AllSeller = () => {
  return (
    <div className='w-11/12 mx-auto mb-4  overflow-x-auto'>
     <div><h2 className="text-xl font-semibold text-center">All Sellers</h2></div>
      <div className="overflow-x-auto mt-5">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Seller's Name</th>
        <th>Email</th>
        <th>Verify</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td >
         <div className='flex items-center gap-1'>
         <h2>Cy ikaihd </h2><CheckBadgeIcon className='w-6 h-4 text-blue-600'/> 
          </div>      
        </td>
        <td>Quality Control Specialist</td>
        <td><button className='btn btn-sm bg-green-500 text-black border-none'>Verify</button></td>
        <td><button className='btn btn-sm bg-error border-none'>Delete</button></td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr className="active">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td><button className='btn btn-sm bg-green-500 text-black border-none'>Verify</button></td>
        <td><button className='btn btn-sm bg-error border-none'>Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllSeller;