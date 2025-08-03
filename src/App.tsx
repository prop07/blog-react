import Router from "./router";
import { LoadingProvider } from "@/context/LoadingProvider";

function App() {
  return (
    <LoadingProvider>
      <Router />
    </LoadingProvider>
  );
}

export default App;