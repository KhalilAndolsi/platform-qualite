"use client";
import { AtSign, Eye, EyeOff, Loader, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";

// Define the validation schema using zod
const signupSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Infer the type from the schema
type SignupFormValues = z.infer<typeof signupSchema>;

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      await signIn("credentials", {
        redirect: true,
        email: data.email,
        password: data.password,
        callbackUrl: "/"
      });
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error (e.g., show error message to the user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="hidden lg:inline-block relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="image"
          src="/images/c1.jpg"
          width={1080}
          height={1350}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 h-screen">
        <div className="mx-auto max-w-lg text-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={550}
            height={200}
            className="w-full h-auto"
          />
          <h1 className="text-2xl font-bold sm:text-3xl">
            Create your account!
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 mb-0 space-y-4 w-full max-w-[550px]">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                id="name"
                {...register("name")}
                className={`w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your name"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <User size={14} className="text-gray-400" />
              </span>
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

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
                placeholder="Enter your email"
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

          <div>
            <label htmlFor="confirm-password" className="sr-only">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword")}
                className={`w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                placeholder="Confirm password"
              />

              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? (
                  <EyeOff size={14} className="text-gray-400" />
                ) : (
                  <Eye size={14} className="text-gray-400" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Already have an account?
              <Link className="underline" href="/login">
                Login
              </Link>
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-block rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-white">
              {isLoading ? <Loader size={18} className="animate-spin"/>: "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
