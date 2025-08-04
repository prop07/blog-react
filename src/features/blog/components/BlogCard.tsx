import BlogActions from "./BlogActions"

type BlogCard = {
  id: string,
  title: string,
  description: string,
  onEdit: () => void,
  onDelete: () => void
}

const BlogCard = ({ id, title, description, onEdit, onDelete }: BlogCard) => {
  return (
    <div
      key={id}
      className="p-4 space-y-2 rounded-md border border-default-border bg-primary "
    >
      <div className="flex justify-between items-start">
        <h1 className="font-semibold break-words">{title}</h1>
        <BlogActions onDelete={onDelete} onEdit={onEdit} />
      </div>
      <div className="max-h-96 overflow-y-hidden">
        <p className=" text-sm" >{description}</p>
      </div>
    </div>
  )
}

export default BlogCard

export const LoadingAnimations = () => {
  return (
    <div className=" space-y-4 mt-2">
      <div className="p-4 space-y-2 rounded-md border  border-default-border animate-pulse">
        <div className="flex justify-between items-start">
          <div className="h-4 bg-gray-200 dark:bg-gray-600  rounded-sm w-8/12"></div>
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
        </div>
        <div className="max-h-34 overflow-y-auto">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-sm w-full my-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-sm w-full my-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-sm w-10/12 my-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-sm w-11/12 my-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-sm w-full my-2"></div>
        </div>

      </div>
    </div>
  );
};

