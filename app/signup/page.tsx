'use client'

import { useState } from 'react';
import Modal from '../../components/Modal';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Redirect to login on success
      window.location.href = '/login';
    } catch (error) {
      setError('An error occurred during signup.');
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSignup} className="mt-8 flex flex-col w-full max-w-md">
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
          Sign Up
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
