import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../Shared/Spinner';

const MyProduct = () => {
  const {user} = useContext(AuthContext);

  const { data = [] ,isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/product/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  console.log(data);

  if(isLoading) {
    return <Spinner/>
  }
  return (
      <div className='w-11/12 mx-auto mb-4  overflow-x-auto'>
     <div><h2 className="text-xl font-semibold text-center">My Products</h2></div>
    <table className="table w-full mt-5">
      {/* <!-- head --> */}
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Status</th>
          <th>Advertise</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((product,i) => <tr key={i}>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={product?.productImg} alt="#" />
                </div>
              </div>
              <div>
                <h3 className="font-bold">{product?.productName}</h3>
              </div>
            </div>
          </td>
          <td>
            <p>{product?.resalePrice}</p>
          </td>
          <td> {
            product?.available === "true" ? 
            <button className='btn btn-ghost'>Available</button>
             :
             <button className='btn btn-ghost ml-2'>Sold</button>            
            }
          </td>
          <th>
            <button className="btn btn-sm">Advertise</button>
          </th>
        </tr>  )

        }
       
     
      </tbody>
    </table>
  </div>
  );
};

export default MyProduct;