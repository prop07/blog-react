import { useAuthStore } from "@/features/auth/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ProtectedLayout = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        if (!isAuthenticated) navigate('/auth/login');
    }, [isAuthenticated]);

    if (!isAuthenticated) return null;
    return <Outlet />;
};

export default ProtectedLayout;
