import { useAuthenticated } from "@/store/auth-slice";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const isAuthenticated = useAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
