import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold">404</h1>
        <p className="mt-4 text-2xl font-medium">Oops! Page not found.</p>
        <p className="mt-2 text-gray-300">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
