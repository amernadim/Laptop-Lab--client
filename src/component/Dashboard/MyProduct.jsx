import React from 'react';

const MyProduct = () => {
  return (
      <div className='w-11/12 mx-auto mb-4  overflow-x-auto'>
     <div><h2 className="text-xl font-semibold text-center">My Products</h2></div>
    <table className="table w-full mt-5">
      {/* <!-- head --> */}
      <thead>
        <tr>
          {/* <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th> */}
          <th>Product</th>
          <th>Price</th>
          <th>Status</th>
          <th>Advertise</th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- row 1 --> */}
        <tr>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="#" />
                </div>
              </div>
              <div>
                <h3 className="font-bold">Hart Hagerty</h3>
              </div>
            </div>
          </td>
          <td>
            <p>1000tk</p>
          </td>
          <td>
            <button className='btn btn-ghost'>Available</button>
            <button className='btn btn-ghost ml-2'>Sold</button>
          </td>
          <th>
            <button className="btn btn-sm">Advertise</button>
          </th>
        </tr>
     
      </tbody>
    </table>
  </div>
  );
};

export default MyProduct;