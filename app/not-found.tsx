import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
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
            We can't find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-white focus:ring-3 focus:outline-hidden">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
