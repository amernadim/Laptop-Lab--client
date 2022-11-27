import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Shared/Spinner";
import toast from "react-hot-toast";

const AllSeller = () => {
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user/Seller");
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (email) => {
    const data = {
      status: "verified",
    };

    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("seller verified");
        }
      });
  };

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/user/${email}`, {
      method : "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
    }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Seller deleted successfully`)
        }
    })
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-11/12 mx-auto mb-4  overflow-x-auto">
      <div>
        <h2 className="text-xl font-semibold text-center">All Sellers</h2>
      </div>
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
            {sellers.map((seller, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-1">
                    <h2>{seller?.name}</h2>
                    {seller.status === "verified" && (
                      <CheckBadgeIcon className="w-6 h-4 text-blue-600" />
                    )}
                  </div>
                </td>
                <td>{seller?.email}</td>
                <td>
                  {!seller.status && (
                    <button
                      onClick={() => handleVerify(seller?.email)}
                      className="btn btn-sm bg-gradient-to-br from-lime-500 via-lime-600 to-green-700 text-white border-none"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller?.email)}
                    className="btn btn-sm bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
