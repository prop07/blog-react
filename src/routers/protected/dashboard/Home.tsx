import { BlogProvider } from "@/shared/context/BlogContext";
import BlogList from "../blog/components/BlogList";

const Home = () => {

  return (
    <div className=" p-2">
      <BlogProvider>
        <BlogList />
      </BlogProvider>
    </div>
  );
};

export default Home;
