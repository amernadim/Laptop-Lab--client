import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Blog/Blog";
import Category from "../../component/Category/Category";
import AddProduct from "../../component/Dashboard/AddProduct";
import AllSeller from "../../component/Dashboard/AllSeller";
import AllUser from "../../component/Dashboard/AllUser";
import MyOrders from "../../component/Dashboard/MyOrders";
import MyProduct from "../../component/Dashboard/MyProduct";
import ReportToAdmin from "../../component/Dashboard/ReportToAdmin";
import Home from "../../component/Home/Home/Home";
import ErrorPage from "../../component/Shared/ErrorPage";
import SignIn from "../../component/SignIn/SignIn";
import SignUp from "../../component/SignIn/SignUp";
import DashboardLayout from "../../layout/DashboardLayout";
import Root from "../../layout/Root";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {path : '/' , element : <Root></Root> , errorElement: <ErrorPage/>, children : [
    {
      path : '/' , 
      element : <Home></Home>
    },
    {
      path : '/home' ,
       element : <Home></Home>
    },
    {
      path : '/blog' ,
       element : <Blog></Blog>
    },
    {
      path : '/signIn' , 
      element : <SignIn></SignIn>
    },
    {
      path : '/signUp' ,
       element : <SignUp></SignUp>
    },
    {
      path : '/category/:id' ,
      element : <PrivateRoute><Category/></PrivateRoute>,
      loader : ({params}) => fetch(`http://localhost:5000/category/${params.id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`
      }
      })
    },
  ]},
  {path : '/dashboard' , element : <PrivateRoute><DashboardLayout/></ PrivateRoute>, errorElement : <ErrorPage/>, children : [
    {
      path : '/dashboard/myOrders' , element : <MyOrders/>
    },
    {
      path : '/dashboard/myProducts' , element : <MyProduct/>
    },
    {
      path : '/dashboard/addProduct' , element : <AddProduct/>
    },
    {
      path : '/dashboard/allSeller' , element : <AllSeller/>
    },
    {
      path : '/dashboard/allUser' , element : <AllUser/>
    },
    {
      path : '/dashboard/reportToAdmin' , element : <ReportToAdmin/>
    }
  ]}
])