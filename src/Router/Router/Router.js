import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Home/Home/Home";
import Root from "../../layout/Root";

export const router = createBrowserRouter([
  {path : '/' , element : <Root></Root> , children : [
    {
      path : '/' , element : <Home></Home>
    },
    {
      path : '/home' , element : <Home></Home>
    },
  ]}
])