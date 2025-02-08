import { AtSign, Eye, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
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
          <h1 className="text-2xl font-bold sm:text-3xl">
            Create your account!
          </h1>
        </div>

        <form
          action="#"
          className="mx-auto mt-8 mb-0 space-y-4 w-full max-w-[550px]">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter username"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <User size={14} className="text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <AtSign size={14} className="text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Eye size={14} className="text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="sr-only">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-2 border-foreground outline-none p-4 pe-12 text-sm shadow-xs"
                placeholder="Confirm password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Eye size={14} className="text-gray-400" />
              </span>
            </div>
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
              className="inline-block rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-white">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
