import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useTokenStore } from "@/store/auth-slice";
import { useLoadingStore } from "@/store/loading-slice";
import axiosInstance from "@/lib/axios"; // path to your axios instance

const API_BASE = "/user"; // Axios instance already has baseURL

const useAuth = () => {
  const { setLoading } = useLoadingStore();
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);

  const loginUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post<{ token: string }>(
        `${API_BASE}/login`,
        { email, password }
      );
      setToken(data.token);
      toast.success("Login successful");
      navigate("/");
    } catch (error: any) {
      toast.error(
        error.response?.data?.error || error.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      await axiosInstance.post(`${API_BASE}/register`, {
        username,
        email,
        password,
      });
      toast.success("Registration successful");
      navigate("/auth/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.error || error.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setLoading(true);
    setToken(null);
    toast.success("Logged out");
    setLoading(false);
    navigate("/auth/login", { replace: true });
  };

  return {
    loginUser,
    registerUser,
    logoutUser,
  };
};

export default useAuth;
