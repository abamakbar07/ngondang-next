import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center text-blue-300">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg text-center text-gray-400">
        This is a simple home page created with Next.js, TypeScript, and Tailwind CSS.
      </p>
      <Link href="/dashboard" className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Go to Dashboard
      </Link>
    </div>
  )
}
