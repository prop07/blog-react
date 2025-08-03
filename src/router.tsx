import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";


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
    //   {
    //     path: "/space",
    //     element: <Space />,
    //     handle: { title: "Space" },
    //   },
      
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};
export default Router;