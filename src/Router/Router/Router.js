import { createBrowserRouter } from "react-router-dom";
import Category from "../../component/Category/Category";
import Dashboard from "../../component/Dashboard/Dashboard/Dashboard";
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
      path : '/dashboard/dashboard' , element : <Dashboard/>
    }
  ]}
])