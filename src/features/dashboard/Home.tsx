import useLoading from "@/shared/hooks/useLoading";
import { Link } from "react-router";
import toast from "react-hot-toast";
import BlogList from "../blog/components/BlogList";
import { useBlog } from "../blog/hooks/useBlog";

const Home = () => {
  const { isLoading, setLoading } = useLoading();
  const {blogs, status} = useBlog();

  const startProcess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Loading complete!");
    }, 2000);
  };

  const triggerError = () => {
    toast.error("Something went wrong!");
  };

  return (
    <div className="mt-20 p-2">
      Home
      <p>{status == "pending" ? <span>loadinng</span>:<span>{JSON.stringify(blogs,null,2)}</span>}</p>
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
      <BlogList/>
    
    </div>
  );
};

export default Home;
