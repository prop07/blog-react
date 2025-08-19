import axios from "axios";
import { useTokenStore } from "@/store/auth-slice"; // adjust path if needed

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  console.warn("⚠️ VITE_API_URL environment variable not found.");
}

// Axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor: attach token
axiosInstance.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;
  if (token && config.headers) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      useTokenStore.getState().clearToken();
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
