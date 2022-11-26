import React from 'react';

const ReportToAdmin = () => {
  return (
    <div className='w-11/12 mx-auto mb-4  overflow-x-auto'>
    <div><h2 className="text-xl font-semibold text-center">Reported Product</h2></div>
     <div className="overflow-x-auto mt-5">
 <table className="table w-full">
   {/* <!-- head --> */}
   <thead>
     <tr>
       <th></th>
       <th>Product Name</th>
       <th>Seller Name</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
     {/* <!-- row 1 --> */}
     <tr>
       <th>1</th>
       <td>Cy ikaihd</td>
       <td>Quality Control Specialist</td>
       <td><button className='btn btn-sm bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white border-none'>Delete</button></td>
     </tr>
     {/* <!-- row 2 --> */}
     <tr className="active">
       <th>2</th>
       <td>Hart Hagerty</td>
       <td>Desktop Support Technician</td>
       <td><button className='btn btn-sm bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white border-none'>Delete</button></td>
     </tr>
   </tbody>
 </table>
</div>
   </div>
  );
};

export default ReportToAdmin;