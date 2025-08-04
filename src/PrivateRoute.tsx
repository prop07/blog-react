import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "./features/auth/authStore";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  useEffect(() => {
    if (!token) navigate('/auth/login');
  }, [token]);

  if (!token) return null;
  return <Outlet />;
};

export default PrivateRoute;
