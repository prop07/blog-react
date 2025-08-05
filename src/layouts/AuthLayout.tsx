import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/authStore";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated]);

    if (isAuthenticated) return null;
    return <Outlet />;
};

export default AuthLayout;
