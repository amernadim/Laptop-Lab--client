import { createBrowserRouter } from "react-router-dom";
import About from "../../component/About/About";
import Blog from "../../component/Blog/Blog";
import Category from "../../component/Category/Category";
import AddProduct from "../../component/Dashboard/AddProduct";
import AllSeller from "../../component/Dashboard/AllSeller";
import AllUser from "../../component/Dashboard/AllUser";
import MyOrders from "../../component/Dashboard/MyOrders";
import MyProduct from "../../component/Dashboard/MyProduct";
import Payment from "../../component/Dashboard/Payment";
import ReportToAdmin from "../../component/Dashboard/ReportToAdmin";
import Home from "../../component/Home/Home/Home";
import ErrorPage from "../../component/Shared/ErrorPage";
import SignIn from "../../component/SignIn/SignIn";
import SignUp from "../../component/SignIn/SignUp";
import DashboardLayout from "../../layout/DashboardLayout";
import Root from "../../layout/Root";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://laptop-lab-server.vercel.app/category/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProduct />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/allSeller",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportToAdmin",
        element: (
          <AdminRoute>
            <ReportToAdmin />
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://laptop-lab-server.vercel.app/bookings/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
    ],
  },
]);
