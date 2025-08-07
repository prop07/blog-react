import { createContext, useContext, useState, ReactNode } from "react";

interface Blog {
    id: string;
    title: string;
    description: string;
}

type Status = "idle" | "pending";

interface BlogContextType {
    blogs: Blog[];
    status: Status;
    setBlogs: (blogs: Blog[]) => void;
    setBlogStatus: (status: Status) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [status, setBlogStatus] = useState<Status>("idle");

    return (
        <BlogContext.Provider value={{ blogs, status, setBlogs, setBlogStatus }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) throw new Error("useBlogContext must be used within BlogProvider");
    return context;
};
