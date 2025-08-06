import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useFetch } from "@/shared/hooks/useFetch";
import useLoading from "@/shared/hooks/useLoading";
import { useTokenStore } from "@/store/auth-slice";

const API_BASE = "http://localhost:5000/api/user";

const useAuth = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { fetchData } = useFetch();
  const setToken = useTokenStore((state) => state.setToken);

  const loginUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      const data = await fetchData<{ token: string }>(`${API_BASE}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      setToken(data.token);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error((error as Error).message || "Login failed");
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
      await fetchData(`${API_BASE}/register`, {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });
      toast.success("Registration successful");
      navigate("/auth/login");
    } catch (error) {
      toast.error((error as Error).message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setLoading(true);
    setToken(null);
    toast.success("Logged out");
    setLoading(false);
    navigate("/auth/login");
  };

  return {
    loginUser,
    registerUser,
    logoutUser,
  };
};

export default useAuth;
