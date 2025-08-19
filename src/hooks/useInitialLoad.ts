import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios"; // path to your axios instance

export const useInitialLoad = () => {
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    const checkServer = async () => {
      try {
        await axiosInstance.get<{ message: string }>("/");
      } catch {
        setServerError(true);
      }
    };
    checkServer();
  }, []);

  return { serverError };
};
