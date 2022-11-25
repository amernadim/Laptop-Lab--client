import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../Shared/Spinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data = [] ,isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/booking/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading) {
    return <Spinner/>
  }

  // console.log(data);

  return (
    <div className="w-11/12 mx-auto mb-4  overflow-x-auto">
      <div>
        <h2 className="text-xl font-semibold text-center">My Orders</h2>
      </div>
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
          {
            data.map((book, i) => <tr key={i}>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={book.productImg}
                    alt="#"
                  />
                </div>
              </div>
            </td>

            <td>
              <h3 className="font-bold">{book.productName}</h3>
            </td>

            <td>
              <p>{book.productPrice}</p>
            </td>
            <th>
              <button className="btn btn-sm">Pay</button>
            </th>
          </tr>) 
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
