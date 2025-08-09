import { useFetch } from "@/hooks/useFetch";
import { useBlogContext } from "@/shared/context/BlogContext";
import { useLoadingStore } from "@/store/loading-slice";

import toast from "react-hot-toast";

type Blog = {
  id: string;
  title: string;
  description: string;
};

export const useBlog = () => {
  const { blogs, status, setBlogs, setBlogStatus } = useBlogContext();

  const { fetchData } = useFetch();
  const { setLoading } = useLoadingStore();

  const fetchBlogs = async () => {
    setBlogStatus("pending");
    try {
      const data: Blog[] = await fetchData(import.meta.env.VITE_API_URL);
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setBlogStatus("idle");
    }
  };

  const createBlog = async (data: { title: string; description: string }) => {
    try {
      setLoading(true);
      await fetchData(import.meta.env.VITE_API_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      toast.success("Blog Added Successfully");
      await fetchBlogs();
    } catch (error) {
      toast.error((error as Error).message || "Unable to Add Blog");
      throw error;
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
      await fetchData(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      toast.success("Blog Updated Successfully");
      await fetchBlogs();
    } catch (error) {
      toast.error((error as Error).message || "Unable to Update Blog");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      setLoading(true);
      await fetchData(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
      });
      toast.success("Blog Deleted Successfully");
      await fetchBlogs();
    } catch (error) {
      toast.error((error as Error).message || "Unable to Delete Blog");
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
