"use client";
import { AtSign, Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";

// Define the validation schema using zod
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Infer the type from the schema
type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setIsLoading(true);
    try {
      await signIn("credentials", {
        redirect: true,
        email: data.email,
        password: data.password,
        callbackUrl: "/"
      });
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 h-screen">
        <div className="mx-auto max-w-lg text-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={550}
            height={200}
            className="w-full h-auto"
          />
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 mb-0 space-y-4 w-full max-w-[550px]">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <AtSign size={14} className="text-gray-400" />
              </span>
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                className={`w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Enter password"
              />

              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={14} className="text-gray-400" />
                ) : (
                  <Eye size={14} className="text-gray-400" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link className="underline" href="/sign-up">
                Sign up
              </Link>
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-block rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-white">
              {isLoading ? <Loader size={18} className="animate-spin"/>: "Sign in"}
            </button>
          </div>
        </form>
      </div>

      <div className="hidden lg:inline-block relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="image"
          src="/images/c4.jpg"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default LoginPage;
