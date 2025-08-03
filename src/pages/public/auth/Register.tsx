import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '@/components/ui/Input/InputField'
import PageHeader from '@/components/ui/PageHeader'
import Submit from '@/components/ui/button/Submit'

const registerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type RegisterFormInputs = z.infer<typeof registerSchema>

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterFormInputs) => {
    console.log('Register data:', data)
  }

  return (
    <div className="relative">
      <div className="mx-auto absolute inset-x-0 top-30 justify-center max-w-md mt-12">
        <PageHeader text="Register" description="It's quick and easy." />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            placeholder="Name"
            type="text"
            error={errors.name?.message}
            {...register('name')}
          />
          <InputField
            placeholder="Email"
            type="email"
            error={errors.email?.message}
            {...register('email')}
          />
          <InputField
            placeholder="Password"
            type="password"
            error={errors.password?.message}
            {...register('password')}
          />
          <Submit placeholder="Register" />
        </form>
      </div>
    </div>
  )
}

export default Register
