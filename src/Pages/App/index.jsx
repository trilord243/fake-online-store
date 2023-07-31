
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SigIn"
import NavBar from "../../Components/Navbar"


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
    path: "/my-order",
    element: <MyOrder />
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },

  {
    path: "*",
    element: <NotFound />
  }, {
    path: "/navbar",
    element: <NavBar />
  }


])
function App() {


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
