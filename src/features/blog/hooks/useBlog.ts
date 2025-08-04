import { useBlogStore } from "../blogStore";
import { useFetch } from "@/shared/hooks/useFetch";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5000/api/blog";

export const useBlog = () => {
  const { blogs, status, setBlogs, setBlogStatus } = useBlogStore();
  const { fetchData } = useFetch();

  const fetchBlogs = async () => {
    setBlogStatus("pending");
    try {
      const data = await fetchData(API_URL);
      setBlogs(data);
      console.log(JSON.stringify(data,null,2))
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
    finally {
        setBlogStatus('idle')
    }
  };

  const createBlog = async (data: any) => {
    try {
      await fetchData(API_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      toast.success("Blog Added Sucessfully")
      await fetchBlogs();
    } catch (error) {
      console.error("Failed to create blog:", error);
    }
  };

  const updateBlog = async (id: string, data: any) => {
    try {
      await fetchData(`${API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      toast.success("Blog Updated Sucessfully")
      await fetchBlogs();
    } catch (error) {
      console.error(`Failed to update blog ${id}:`, error);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      await fetchData(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      toast.success("Blog Deleted Sucessfully")
      await fetchBlogs();
    } catch (error) {
      console.error(`Failed to delete blog ${id}:`, error);
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
