// src/store/blogStore.ts
import { create } from "zustand";

interface Blog {
  id: string;
  title: string;
  description: string;
}

type Status = "idle" | "pending";

interface BlogState {
  blogs: Blog[];
  status: Status;
  setBlogs: (blogs: Blog[]) => void;
  setBlogStatus: (status: Status) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  status: "idle",
  setBlogs: (blogs) => set({ blogs }),
  setBlogStatus: (status) => set({ status }),
}));
