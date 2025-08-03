import useLoading from "@/hooks/useLoading";
import { successToast, errorToast } from "@/components/ui/toast/Toast";
import { Link } from "react-router";

const Home = () => {
  const { isLoading, setLoading } = useLoading();

  const startProcess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      successToast("Loading complete!");
    }, 2000);
  };

  const triggerError = () => {
    errorToast("Something went wrong!");
  };

  return (
    <div className="mt-20 p-2">
      Home
      <div>
        {isLoading ? <p>Loading...</p> : <p>Content loaded</p>}
        <button onClick={startProcess} className="mt-2 bg-black text-white px-4 py-2 rounded">
          Trigger Loading
        </button>
        <button onClick={triggerError} className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded">
          Trigger Error Toast
        </button>
      </div>
      <Link to="/auth/register" className="text-blue-500 hover:underline mt-2 block">
        Go to Register
      </Link>
    </div>
  );
};

export default Home;
