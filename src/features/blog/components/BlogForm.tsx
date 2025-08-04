import Modal from '@/shared/components/models/Modal'
import Button from '@/shared/components/ui/button/Button'
import Submit from '@/shared/components/ui/button/Submit'
import { useEffect, useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
})

type BlogFormType = z.infer<typeof schema>

const BlogForm = ({
  initialData,
  onSubmit,
  onClose,
}: {
  initialData?: BlogFormType
  onSubmit: (data: BlogFormType) => Promise<void>
  onClose?: () => void
}) => {
  const [showModal, setShowModal] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  useEffect(() => {
    if (initialData) {
      reset(initialData)
      setShowModal(true)  // auto open modal when editing
    }
  }, [initialData, reset])

  const openModal = () => {
    reset({ title: '', description: '' }) // clear form on create
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    onClose?.()
  }

  const handleFormSubmit = async (data: BlogFormType) => {
    await onSubmit(data)
    reset()
    closeModal()
  }

  return (
    <div>
      <Button
        onClick={openModal}
        placeholder="Post Blog"
        icon={<MdAdd className="text-text" size={18} />}
        className="border border-default-border"
      />

      <Modal isOpen={showModal} onClose={closeModal}>
        <form className="grid space-y-3" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold tracking-wider">
              {initialData ? 'Edit Blog' : 'Blog Details'}
            </h1>
            <Button onClick={closeModal} icon={<MdClose size={20} />} />
          </div>

          <div>
            <textarea
              {...register('title')}
              className="border border-default-border p-2 rounded-md w-full focus:ring-1 focus:outline-none"
              placeholder="Title"
              rows={2}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register('description')}
              className="border border-default-border p-2 rounded-md w-full focus:ring-1 focus:outline-none"
              placeholder="Description"
              rows={6}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          <Submit placeholder={initialData ? 'Update' : 'Post'} />
        </form>
      </Modal>
    </div>
  )
}

export default BlogForm
