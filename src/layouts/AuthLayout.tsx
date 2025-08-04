import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/authStore";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = () => {
    const navigate = useNavigate();
    const { token } = useAuthStore();

    useEffect(() => {
        if (token) navigate('/');
    }, [token]);

    if (token) return null;
    return <Outlet />;
};

export default AuthLayout;
