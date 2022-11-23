import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Home/Home/Home";
import SignIn from "../../component/SignIn/SignIn";
import SignUp from "../../component/SignIn/SignUp";
import Root from "../../layout/Root";

export const router = createBrowserRouter([
  {path : '/' , element : <Root></Root> , children : [
    {
      path : '/' , element : <Home></Home>
    },
    {
      path : '/home' , element : <Home></Home>
    },
    {
      path : '/signIn' , element : <SignIn></SignIn>
    },
    {
      path : '/signUp' , element : <SignUp></SignUp>
    },
  ]}
])