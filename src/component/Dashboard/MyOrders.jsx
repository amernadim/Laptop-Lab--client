import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../Shared/Spinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data = [], isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(
        `https://laptop-lab-server.vercel.app/booking/${user?.email}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
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
          {data.map((book, i) => (
            <tr key={i}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={book?.productImg} alt="#" />
                  </div>
                </div>
              </td>

              <td>
                <h3 className="font-bold">{book?.productName}</h3>
              </td>

              <td>
                <p>{book?.productPrice}</p>
              </td>
              <th>
                { book?.productPrice && !book?.paid &&
                  <Link to={`/dashboard/payment/${book?.productId}`}>
                  <button className="btn btn-sm bg-gradient-to-br from-lime-500 via-lime-600 to-green-700 text-white">
                    Pay
                  </button>
                </Link>               
                }
                { book?.productPrice && book?.paid &&
                  <button className="btn btn-sm">
                    Paid
                  </button>
                }
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
