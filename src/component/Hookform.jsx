/*import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; 

export const Hookform = () => {
  // 1️⃣ Hooks must be at the top
  const schema = z.object({
  name: z.email(),
  password: z.string().min(10),
});

  const { register, handleSubmit ,  formState: { errors }, } = useForm({
    resolver: zodResolver(schema),});
   

  // 2️⃣ Submit function
  const onSubmit = (data) => {
    console.log(data);
  };

  // 3️⃣ JSX only inside return
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Your email
      </label>
      <input
        type="email"
        {...register("email")}
        className="border p-2 mb-4 w-full"
        placeholder="name@company.com"
      />
      {errors.email?.message && <p>{errors.email?.message}</p>}

      <label className="block mb-2 text-sm font-medium text-gray-900">
        Your password
      </label>
      <input
        type="password"
        {...register("password")}
        className="border p-2 mb-4 w-full"
        placeholder="••••••••"
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};*/
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const Hookform = () => {
  // 1️⃣ Validation schema
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(10, "Password must be at least 10 characters"),
  });

  // 2️⃣ useForm with resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // 3️⃣ Submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        {...register("email")}
        className="border p-2 mb-2 w-full"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password</label>
      <input
        type="password"
        {...register("password")}
        className="border p-2 mb-2 w-full"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};
