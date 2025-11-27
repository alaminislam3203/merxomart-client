'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider } from '@/app/firebase/config';

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;

    // Name & Password Validation
    if (name.length < 5) {
      toast.error('Name should be at least 5 characters');
      return;
    }
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    } else if (!uppercasePattern.test(password)) {
      toast.error('Password must contain at least one uppercase letter');
      return;
    } else if (!lowercasePattern.test(password)) {
      toast.error('Password must contain at least one lowercase letter');
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photo,
      });
      toast.success('Account created successfully!');
      router.push('/');
    } catch (error) {
      toast.error(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Signed up with Google!');
      router.push('/');
    } catch (error) {
      toast.error(error.message || 'Google Sign-Up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition pr-10"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              ></span>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 transition duration-300 shadow-md"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 font-semibold">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-Up */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            <FcGoogle size={24} />
            <span className="font-medium">Sign Up with Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm pt-5 text-gray-600">
            Already have an account?{' '}
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
export default RegisterPage;
