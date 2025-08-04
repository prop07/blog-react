import { useAuthStore } from "@/features/auth/authStore";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = () => {
    const navigate = useNavigate();
    const { token } = useAuthStore();
    if (token) {
        navigate('/')
        return null
    }
    return <Outlet />

};

export default AuthLayout;