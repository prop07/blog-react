import { useEffect, useState } from "react";
import { useFetch } from "@/shared/hooks/useFetch";

export const useInitialLoad = () => {
  const { fetchData } = useFetch();
  const [serverError, setServerError] = useState(false);

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
