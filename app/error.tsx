"use client";
import { useEffect } from "react";
import Image from "next/image";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex h-screen flex-col bg-white">
      <Image
        src="/images/c4.jpg"
        alt="image"
        width={1080}
        height={768}
        className="h-[40vh] w-full object-cover"
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Server Error | 500
          </h1>

          <p className="mt-4 text-gray-500">
            Try refresh the page again, or return home to start from the
            beginning.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 inline-block rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-white focus:ring-3 focus:outline-hidden">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
