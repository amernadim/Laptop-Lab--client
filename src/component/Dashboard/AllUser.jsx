import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
  const {data: users=[] } = useQuery({
    queryKey : ["user"],
    queryFn : async () => {
      const res = await fetch('http://localhost:5000/user/User');
      const data = await res.json();
      return data;
    }
  })
  return (
    <div className='w-11/12 mx-auto mb-4  overflow-x-auto'>
    <div><h2 className="text-xl font-semibold text-center">All Buyers</h2></div>
     <div className="overflow-x-auto mt-5">
 <table className="table w-full">
   {/* <!-- head --> */}
   <thead>
     <tr>
       <th></th>
       <th>Buyer's Name</th>
       <th>Email</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
     {users.map((user,i) =>  <tr key={i}>
       <th>{i + 1}</th>
       <td>{user.name}</td>
       <td>{user.email}</td>
       <td><button className='btn btn-sm bg-error border-none'>Delete</button></td>
     </tr>)}
    
   </tbody>
 </table>
</div>
   </div>
  );
};

export default AllUser;