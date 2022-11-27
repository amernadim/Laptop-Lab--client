import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../Shared/Spinner";
import toast from "react-hot-toast";

const ReportToAdmin = () => {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products/reported", {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-11/12 mx-auto mb-4  overflow-x-auto">
      <div>
        <h2 className="text-xl font-semibold text-center">Reported Product</h2>
      </div>
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
            {data.map((report, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{report?.productName}</td>
                <td>{report?.sellerName}</td>
                <td>
                  <button
                    onClick={() => handleDelete(report?._id)}
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

export default ReportToAdmin;
