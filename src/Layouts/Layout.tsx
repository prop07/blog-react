import TopLoadingBar from "@/components/TopLoadingBar";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className=" bg-secondary text-text min-h-[100vh] flex flex-col overflow-hidden">
    <TopLoadingBar />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;