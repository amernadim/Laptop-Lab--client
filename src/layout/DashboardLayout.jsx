import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/Shared/Navbar";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import useUser from "../hooks/useUser";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isUser] = useUser(user?.email);
  return (
    <div>
      <div>
        <Navbar />
        <div className="drawer drawer-mobile mt-[72px]">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 text-base-content">
              {/* <!-- Sidebar content here --> */}

            {  isUser &&
            <li className="btn btn-md mt-2">
                <Link className="" to="/dashboard/myOrders">
                  My Order
                </Link>
              </li>
              }

            { isSeller &&
              <>
                <li className="btn btn-md mt-2">
                <Link to="/dashboard/addProduct">Add A Product</Link>
              </li>
              <li className="btn btn-md mt-2">
                <Link to="/dashboard/myProducts">My Products</Link>
              </li>
              </>
            }

              {isAdmin && (
                <>
                  <li className="btn btn-md mt-2">
                    <Link to="/dashboard/allSeller">All Sellers</Link>
                  </li>
                  <li className="btn btn-md mt-2">
                    <Link to="/dashboard/allUser">All Buyers</Link>
                  </li>
                  <li className="btn btn-md mt-2">
                    <Link to="/dashboard/reportToAdmin">Report To Admin</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
