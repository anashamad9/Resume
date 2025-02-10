import Link from "next/link"

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">404 - Page Not Found</h1>
        <p className="text-xl mb-8 text-neutral-600 dark:text-neutral-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  )
}

