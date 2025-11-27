'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async e => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset link sent to your email!');
      setTimeout(() => router.push('/login'), 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 transition duration-300 shadow-md"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>

          <p className="text-center text-sm pt-5 text-gray-600">
            Remembered your password?{' '}
            <a
              href="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
