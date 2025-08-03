import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layouts/Layout";
import Home from "./pages/protected/Home";
import Login from "./pages/public/auth/Login";
import Register from "./pages/public/auth/Register";


const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Not Found</div>,
    element: <Layout />,
    children: [
      {
        index: true, //base page
        element: <Home />,
        handle: { title: "Home" },
      },
      {
        path: "/auth/register",
        element: <Register />,
        handle: { title: "Register" },
      },
      {
        path: "/auth/login",
        element: <Login />,
        handle: { title: "Login" },
      },
      
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};
export default Router;