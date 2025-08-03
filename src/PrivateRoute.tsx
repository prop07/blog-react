// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
