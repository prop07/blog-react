import { useEffect, useState } from "react";
import { useFetch } from "@/shared/hooks/useFetch";
import { useAuthStore } from "@/features/auth/authStore";

export const useInitialLoad = () => {
  const { fetchData } = useFetch();
  const [serverError, setServerError] = useState(false);
  const { token } = useAuthStore();
  console.log("token:", token);

  useEffect(() => {
    const checkServer = async () => {
      try {
        await fetchData<{ message: string }>("http://localhost:5000/");
      } catch {
        setServerError(true);
      }
    };

    checkServer();
  }, []);

  return { serverError };
};
