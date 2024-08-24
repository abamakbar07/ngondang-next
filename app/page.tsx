export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        This is a simple home page created with Next.js, TypeScript, and Tailwind CSS.
      </p>
      <a
        href="/dashboard"
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Go to Dashboard
      </a>
    </div>
  )
}