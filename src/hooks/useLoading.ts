import LoadingContext from "@/context/LoadingProvider";
import { useContext } from "react";


const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("unable to find LoadingContext, make sure you are using it within a LoadingProvider");
  return context;
};

export default useLoading;
