import { Toaster } from "react-hot-toast";
import Router from "./router";
import { LoadingProvider } from "@/context/LoadingProvider";

function App() {
  return (
    <LoadingProvider>
      <Toaster/>
      <Router />
    </LoadingProvider>
  );
}

export default App;