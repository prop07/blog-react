import LoadingContext from "@/context/LoadingProvider";
import { useContext } from "react";


const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("useLoading must be used within LoadingProvider");
  return context;
};

export default useLoading;
