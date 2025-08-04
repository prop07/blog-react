import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./features/dashboard/Home";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />, // wrap auth routes
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        element: <ProtectedLayout />, // wrap protected routes
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
const Router = () => <RouterProvider router={routes} />;
export default Router;
