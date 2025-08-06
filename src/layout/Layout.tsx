import TopLoadingBar from "@/shared/components/TopLoadingBar";
import NavBar from "../shared/components/NavBar";
import { Outlet } from "react-router";
import { useInitialLoad } from "@/shared/hooks/useInitialLoad";
import { useAuthenticated } from "@/store/auth-slice";

const Layout = () => {
  const { serverError } = useInitialLoad();
  const isAuthenticated = useAuthenticated();

  console.log("User:", isAuthenticated);

  if (serverError)
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-red-500 p-4 text-center space-y-4">
        <div className=" space-y-2">
          <p>⚠️ Server is not running.</p>
          <p className="text-sm text-gray-400">
            Make sure you run the server in a separate terminal using:
          </p>
          <p className="bg-white  text-black font-semibold px-2 py-1 rounded">
            npm run server
          </p>
          <p className="text-sm text-gray-400">
            Or read the README for setup instructions.
          </p>
        </div>
      </div>
    );

  return (
    <div className="bg-secondary text-text min-h-[100vh] flex flex-col overflow-hidden">
      <TopLoadingBar />
      <NavBar />
      <div className="mt-10 p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
