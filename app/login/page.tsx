'use client'

import { useState } from 'react';
import Modal from '../components/Modal';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Redirect to dashboard on success
      window.location.href = '/dashboard';
    } catch (error) {
      setError('An error occurred during login.');
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="mt-8 flex flex-col w-full max-w-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mb-4 rounded-md bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 rounded-md bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={error}
      />
    </div>
  );
}
