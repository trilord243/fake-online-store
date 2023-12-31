
import {
  createBrowserRouter, Navigate, RouterProvider
} from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"

import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SigIn"
import { ShoppingCartProvider } from "../../Context"
import Clothes from "../Home/Clothes"
import Electronics from "../Home/Electronics"
import Furnitures from "../Home/Furnitures"
import Others from "../Home/Others"
import Toys from "../Home/Toys"
import Register from "../Register"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/my-account",
    element: <MyAccount />
  },
  {
    path: "/my-orders",
    element: <MyOrders />
  },

  {
    path: "/sign-in",
    element: <SignIn />
  },

  {
    path: "*",
    element: <NotFound />
  },
  {
    path: '/clothes',
    element: <Clothes />

  }, {
    path: '/electronics',
    element: <Electronics />

  }, {
    path: '/furnitures',
    element: <Furnitures />

  }, {
    path: '/toys',
    element: <Toys />

  }, {
    path: '/others',
    element: <Others />

  },
  {
    path: "/register",
    element: <Register />
  }


])
function App() {



  return (
    <ShoppingCartProvider>

      <RouterProvider router={router} />
    </ShoppingCartProvider>


  )
}

export default App
