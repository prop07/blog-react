// src/hooks/useAuth.ts
import { useState } from "react";
import { toast } from "react-hot-toast";
import useLoading from "./useLoading";
import { useNavigate } from "react-router";


const API_BASE = "http://localhost:5000/api/user";

const useAuth = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoading();
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token);


    const loginUser = async (email: string, password: string) => {
        try {
            setLoading(true);
            const res = await fetch(`${API_BASE}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Login failed");
            }

            localStorage.setItem("token", data.token);
            setToken(data.token);
            setIsAuthenticated(true);
            toast.success("Login successful");
            navigate("/")
        } catch (error) {
            toast.error((error as Error).message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    const registerUser = async (username: string, email: string, password: string) => {
        try {
            setLoading(true);
            const res = await fetch(`${API_BASE}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || "Registration failed");
            }

            toast.success("Registration successful");
            navigate("/auth/login")
        } catch (error) {
            toast.error((error as Error).message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setIsAuthenticated(false);
        toast.success("Logged out");
    };

    return {
        token,
        isAuthenticated,
        loginUser,
        registerUser,
        logout,
    };
};

export default useAuth;
