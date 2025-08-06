import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/shared/ui/Input/InputField";
import PageHeader from "@/shared/ui/PageHeader";
import Submit from "@/shared/ui/button/Submit";
import { Link } from "react-router";
import useAuth from "@/hooks/useAuth";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

function Login() {
  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    loginUser(data.email, data.password);
  };

  return (
    <div className="relative">
      <div className="mx-auto absolute inset-x-0 top-30 justify-center max-w-md mt-12">
        <PageHeader
          text="Login"
          description="If you are already a member, easily log in."
        />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            placeholder="Email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <InputField
            placeholder="Password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <Submit placeholder="Login" />
        </form>
        <Link to="/auth/register">
          <p className="text-sm underline text-end mt-2 tracking-wider">
            register
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
