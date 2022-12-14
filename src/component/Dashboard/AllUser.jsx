import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../Shared/Spinner";
import toast from "react-hot-toast";

const AllUser = () => {
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("https://laptop-lab-server.vercel.app/user/User");
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (email) => {
    fetch(`https://laptop-lab-server.vercel.app/user/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Buyer deleted successfully");
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-11/12 mx-auto mb-4  overflow-x-auto">
      <div>
        <h2 className="text-xl font-semibold text-center">All Buyers</h2>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Buyer's Name</th>
              <th>Buyer's Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user?.email)}
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

export default AllUser;
