import useLoading from "@/hooks/useLoading";
import { Link } from "react-router";

const Home = () => {
  const { isLoading, setLoading } = useLoading();

  const startProcess = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simulate loading
  };

  return (
    <div className="mt-20 p-2">
      Home
      <div>
      {isLoading ? <p>Loading...</p>: <p>Content loaded</p>}
      <button onClick={startProcess}>Trigger Loading</button>
    </div>
  <div className="mt-4">
  <input
    type="text"
    placeholder="Type something..."
    className="p-2 border border-default-border rounded focus:ring-1  focus:outline-none w-full"
  />
</div>
<Link to="/auth/login" className="text-blue-500 hover:underline mt-4 block">
        Go to Login
      </Link>
      <Link to="/auth/register" className="text-blue-500 hover:underline mt-2 block">
        Go to Register
      </Link>

    </div>
  
  );
};

export default Home;
