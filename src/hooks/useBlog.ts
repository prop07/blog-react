import { useFetch } from "@/shared/hooks/useFetch";
import useLoading from "@/shared/hooks/useLoading";
import { useBlogStore } from "@/store/blog-slice";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5000/api/blog";

type Blog = {
  id: string;
  title: string;
  description: string;
};

export const useBlog = () => {
  const blogs = useBlogStore((state) => state.blogs);
  const status = useBlogStore((state) => state.status);
  const setBlogs = useBlogStore((state) => state.setBlogs);
  const setBlogStatus = useBlogStore((state) => state.setBlogStatus);

  const { fetchData } = useFetch();
  const { setLoading } = useLoading();

  const fetchBlogs = async () => {
    setBlogStatus("pending");
    try {
      const data: Blog[] = await fetchData(API_URL);
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
      await fetchData(API_URL, { method: "POST", body: JSON.stringify(data) });
      toast.success("Blog Added Successfully");
      await fetchBlogs();
    } catch (error) {
      toast.error((error as Error).message || "Unable to Add Blog");
      throw error; // rethrow
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
      toast.success("Blog Updated Successfully");
      await fetchBlogs();
    } catch (error) {
      toast.error((error as Error).message || "Unable to Update Blog");
      throw error; // rethrow
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
