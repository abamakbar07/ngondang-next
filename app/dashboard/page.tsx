'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'John Doe', content: 'This is a sample post.' },
    { id: 2, user: 'Jane Smith', content: 'Another sample post.' },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center text-blue-300">Dashboard</h1>
      <div className="mt-8 w-full max-w-4xl">
        {posts.map((post) => (
          <div key={post.id} className="p-4 mb-4 bg-gray-800 rounded-md">
            <p className="text-lg font-medium">{post.user}</p>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
      <Link href="/" className="mt-4 text-blue-300 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
