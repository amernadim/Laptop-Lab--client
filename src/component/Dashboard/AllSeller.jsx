import React from 'react';
import {CheckBadgeIcon} from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';

const AllSeller = () => {
  const {data:sellers = []} = useQuery({
    queryKey : ["user"],
    queryFn : async() => {
      const res = await fetch('http://localhost:5000/user/Seller')
      const data = await res.json();
      return data
    }

  })
     
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
      {
        sellers.map((seller,i) => <tr key={i}>
          <th>{i + 1}</th>
          <td >
           <div className='flex items-center gap-1'>
           <h2>{seller.name}</h2><CheckBadgeIcon className='w-6 h-4 text-blue-600'/> 
            </div>      
          </td>
          <td>{seller.email}</td>
          <td><button className='btn btn-sm bg-green-500 text-black border-none'>Verify</button></td>
          <td><button className='btn btn-sm bg-error border-none'>Delete</button></td>
        </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllSeller;