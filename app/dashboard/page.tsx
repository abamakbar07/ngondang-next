export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-green-600">Dashboard</h1>
            <p className="mt-4 text-lg text-center text-gray-600">
                Welcome to the Dashboard page.
            </p>
            <a
                href="/"
                className="mt-8 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
                Back to Home
            </a>
        </div>
    )
};
