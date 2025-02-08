import { AtSign, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 h-screen">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="#" className="mx-auto mt-8 mb-0 space-y-4 w-full max-w-[550px]">
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

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link className="underline" href="/sign-up">
                Sign up
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-white">
              Sign in
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
