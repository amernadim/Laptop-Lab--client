import React from 'react';

const MyOrders = () => {
  return (
    <div className='w-11/12 mx-auto mb-4  overflow-x-auto'>
    <div><h2 className="text-xl font-semibold text-center">My Orders</h2></div>
   <table className="table w-full mt-5">
     {/* <!-- head --> */}
     <thead>
       <tr>
         <th>Product Image</th>
         <th>Product Name</th>
         <th>Price</th>
         <th>Payment</th>
       </tr>
     </thead>
     <tbody>
       {/* <!-- row 1 --> */}
       <tr>
         <td>
           <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
                 <img src="/tailwind-css-component-profile-2@56w.png" alt="#" />
              </div>
           </div>
          </td> 

          <td>
             <h3 className="font-bold">Hart Hagerty</h3>
          </td>
        
         <td>
           <p>1000tk</p>
         </td>
         <th>
           <button className="btn btn-sm">Pay</button>
         </th>
       </tr>
    
     </tbody>
   </table>
 </div>
  );
};

export default MyOrders;