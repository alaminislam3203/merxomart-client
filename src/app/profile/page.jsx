'use client';
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FiMail, FiUser, FiEdit } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleEditProfile = () => {
    router.push('/profile/edit-profile');
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">My Profile</h1>

      <div className="bg-white border shadow-md rounded-2xl p-8 flex flex-col items-center gap-6">
        {/* Profile Image */}
        <div className="relative">
          <Image
            src={user?.photoURL || assets.user_icon}
            alt="User"
            width={130}
            height={130}
            className="rounded-full border shadow-md object-cover"
          />
        </div>

        {/* User Info */}
        <div className="w-full space-y-4">
          {/* Username */}
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
            <FiUser className="text-xl text-gray-700" />
            <span className="font-semibold text-lg">
              {user?.displayName || 'No Name Available'}
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
            <FiMail className="text-xl text-gray-700" />
            <span className="text-gray-800">{user?.email}</span>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button
          onClick={handleEditProfile}
          className="mt-4 w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg hover:bg-gray-800 transition"
        >
          <FiEdit className="text-xl" />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
