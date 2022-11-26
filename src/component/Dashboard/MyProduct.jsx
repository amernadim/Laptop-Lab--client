import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../Shared/Spinner';
import toast from 'react-hot-toast';

const MyProduct = () => {
  const {user} = useContext(AuthContext);

  const { data = [] ,isLoading ,refetch} = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/product/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });


  // Available
  const handleAvailable =(id,data) => {
    const IsAvailable = {
      available : data
    }
  //  console.log(IsAvailable);
    fetch(`http://localhost:5000/product/${id}` , {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(IsAvailable)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.modifiedCount > 0) {
        toast.success("Successfully Products Status changed")
        console.log(data);
        refetch()
      }
  })

  }

  // Advertise
  const handleAdvertise =(id,data) => {
    const IsAdvertise = {
      advertise : data
    }
   console.log(IsAdvertise);
    fetch(`http://localhost:5000/product/${id}` , {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(IsAdvertise)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.modifiedCount > 0) {
        toast.success("Successfully changed")
        console.log(data);
        refetch()
      }
  })

  }

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
          <th>Year Of Used</th>
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
          <td>
            <p>{product?.yearOfUsed}</p>
          </td>
          <td > 
            {
              product?.available === "false" ?          
            <button onClick={() => handleAvailable(product?._id, "true")} className='btn btn-sm'>Available ?</button>
            :
             <button onClick={() => handleAvailable(product?._id, "false")}
             className='btn btn-sm ml-2'>Sold ?</button>            
            }
          </td>
          <th>{
             product?.advertise === "false" && 
            <button onClick={() => handleAdvertise(product?._id, "true")}  className="btn btn-sm bg-gradient-to-br from-lime-500 via-lime-600 to-green-700 text-white">Advertise</button>
            }
          </th>
        </tr>  )

        }
       
     
      </tbody>
    </table>
  </div>
  );
};

export default MyProduct;