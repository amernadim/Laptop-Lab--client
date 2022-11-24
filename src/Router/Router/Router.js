import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Blog/Blog";
import Category from "../../component/Category/Category";
import AddProduct from "../../component/Dashboard/AddProduct";
import AllSeller from "../../component/Dashboard/AllSeller";
import AllUser from "../../component/Dashboard/AllUser";
// import Dashboard from "../../component/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../component/Dashboard/MyOrders";
import MyProduct from "../../component/Dashboard/MyProduct";
import Home from "../../component/Home/Home/Home";
import SignIn from "../../component/SignIn/SignIn";
import SignUp from "../../component/SignIn/SignUp";
import DashboardLayout from "../../layout/DashboardLayout";
import Root from "../../layout/Root";

export const router = createBrowserRouter([
  {path : '/' , element : <Root></Root> , children : [
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
      path : '/category' ,
     element : <Category></Category>
    },
  ]},
  {path : '/dashboard' , element : <DashboardLayout/>, children : [
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
  ]}
])