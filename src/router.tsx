import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./features/dashboard/Home";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        element: <PrivateRoute />, // wrap protected routes
        children: [
          {
            index: true,
            element: <Home />,
          },
          // {
          //   path: "/create",
          //   element: <Create />,
          // },
          // {
          //   path: "/edit/:id",
          //   element: <Edit />,
          // },
        ],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={routes} />;
export default Router;
