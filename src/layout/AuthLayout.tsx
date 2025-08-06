import { useAuthenticated } from "@/store/auth-slice";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthLayout;
