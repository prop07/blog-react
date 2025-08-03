import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '@/components/ui/Input/InputField'
import PageHeader from '@/components/ui/PageHeader'
import Submit from '@/components/ui/button/Submit'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormInputs = z.infer<typeof loginSchema>

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login data:', data)
  }

  return (
 <div className="relative">
  <div className="mx-auto absolute inset-x-0 top-30 justify-center max-w-md mt-12">
    <PageHeader text="Login" description="If you are already a member, easily log in." />
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
<Submit placeholder="Login" />
    </form>
  </div>
</div>
  )
}

export default Login
