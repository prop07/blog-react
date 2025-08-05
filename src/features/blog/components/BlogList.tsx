import PageHeader from '@/shared/components/ui/PageHeader'
import BlogCard, { LoadingAnimations } from './BlogCard'
import BlogForm from './BlogForm'
import { useBlog } from '../hooks/useBlog'
import { useEffect, useState } from 'react'

type Blog = {
  id: string
  title: string
  description: string
}

const BlogList = () => {
  const { blogs, status, fetchBlogs, createBlog, updateBlog, deleteBlog } = useBlog()
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleSubmit = async (data: { title: string; description: string }) => {
    if (editingBlog) {
      await updateBlog(editingBlog.id, data)
      setTimeout(() => { setEditingBlog(null) }, 100)
    } else {
      await createBlog(data)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <PageHeader text="Trending Now" />
        <BlogForm
          initialData={editingBlog ?? undefined}
          onSubmit={handleSubmit}
          onClose={() => setTimeout(() => setEditingBlog(null), 500)}
        />
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {status === "pending" ? (
          [...Array(12)].map((_, i) => <LoadingAnimations key={i} />)
        ) : blogs.length === 0 ? (
          < div className="mt-4 text-gray-500">No blogs yet. Add one using the "Post Blog" button.</div>
        ) : (
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              onEdit={() => setEditingBlog(blog)}
              onDelete={() => deleteBlog(blog.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default BlogList
