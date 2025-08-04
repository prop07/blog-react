import PageHeader from '@/shared/components/ui/PageHeader'
import BlogCard from './BlogCard'
import Button from '@/shared/components/ui/button/Button'
import { MdAdd } from 'react-icons/md'

const BlogList = () => {
  return (
    <div className=' space-y-2'> 
    <div className='flex justify-between items-center'>

    <PageHeader text='Tranding Blog'/>
       <Button
                  placeholder={"Post Blog"}
                  icon={<MdAdd className="text-text" size={18} />}
                  className={"border border-default-border"}
                />
    </div>
     {Array.from({ length: 4 }).map((index) => (
              <BlogCard />
            ))}
            </div>
  )
}

export default BlogList