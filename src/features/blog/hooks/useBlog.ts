import { useBlogStore } from "../blogStore";
import { useFetch } from "@/shared/hooks/useFetch";
import useLoading from "@/shared/hooks/useLoading";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5000/api/blog";

type Blog = {
  id: string;
  title: string;
  description: string;
};

export const useBlog = () => {
  const { blogs, status, setBlogs, setBlogStatus } = useBlogStore();
  const { fetchData } = useFetch();
  const { setLoading } = useLoading();

  const fetchBlogs = async () => {
    setBlogStatus("pending");
    try {
      const data: Blog[] = await fetchData(API_URL);
      setBlogs(data);
      console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setBlogStatus("idle");
    }
  };

  const createBlog = async (data: { title: string; description: string }) => {
    try {
      setLoading(true);
      await fetchData(API_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      toast.success("Blog Added Sucessfully");
      await fetchBlogs();
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (
    id: string,
    data: { title: string; description: string }
  ) => {
    try {
      setLoading(true);
      await fetchData(`${API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      toast.success("Blog Updated Sucessfully");
      await fetchBlogs();
    } catch (error) {
      console.error(`Failed to update blog ${id}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      setLoading(true);
      await fetchData(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      toast.success("Blog Deleted Sucessfully");
      await fetchBlogs();
    } catch (error) {
      console.error(`Failed to delete blog ${id}:`, error);
    } finally {
      setLoading(false);
    }
  };

  return {
    blogs,
    status,
    fetchBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
  };
};
