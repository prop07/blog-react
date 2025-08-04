import PageHeader from '@/shared/components/ui/PageHeader'
import BlogCard from './BlogCard'
import BlogForm from './BlogForm'
import { useBlog } from '../hooks/useBlog'
import { useEffect, useState } from 'react'

type Blog = {
  id: string
  title: string
  description: string
}

const BlogList = () => {
  const { blogs, fetchBlogs, createBlog, updateBlog, deleteBlog } = useBlog()
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleSubmit = async (data: { title: string; description: string }) => {
    if (editingBlog) {
      await updateBlog(editingBlog.id, data)
      setEditingBlog(null)
    } else {
      await createBlog(data)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <PageHeader text="Trending Blog" />
        <BlogForm
          initialData={editingBlog ?? undefined}
          onSubmit={handleSubmit}
          onClose={() => setEditingBlog(null)}
        />
      </div>

      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          onEdit={() => setEditingBlog(blog)}
          onDelete={() => deleteBlog(blog.id)}
        />
      ))}
    </div>
  )
}

export default BlogList
