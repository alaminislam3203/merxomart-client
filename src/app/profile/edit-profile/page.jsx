'use client';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FiUser, FiMail, FiCamera, FiSave } from 'react-icons/fi';

const EditProfilePage = () => {
  const { user, updateUserProfile } = useAuth();
  const [fullName, setFullName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [loading, setLoading] = useState(false);

  const handleProfileUpdate = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUserProfile(fullName, photoURL);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Edit Your Profile
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
            <Image
              src={user?.photoURL || assets.user_icon}
              alt="User Avatar"
              width={112}
              height={112}
              className="object-cover"
            />
            <FiCamera className="absolute bottom-2 right-2 text-gray-600 bg-white rounded-full p-1 w-6 h-6" />
          </div>

          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FiUser className="text-gray-700" />{' '}
            {user?.displayName || 'No Name'}
          </h2>
          <p className="text-gray-600 flex items-center gap-2">
            <FiMail className="text-gray-700" /> {user?.email || 'No Email'}
          </p>
        </div>

        {/* Update Profile Form */}
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div className="flex items-center gap-2">
            <FiUser className="text-gray-700 text-xl" />
            <input
              type="text"
              className="flex-1 px-4 py-2 border rounded-md outline-none focus:border-black"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="Enter full name"
            />
          </div>

          <div className="flex items-center gap-2">
            <FiCamera className="text-gray-700 text-xl" />
            <input
              type="text"
              className="flex-1 px-4 py-2 border rounded-md outline-none focus:border-black"
              value={photoURL}
              onChange={e => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition"
          >
            <FiSave className="text-xl" />
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditProfilePage;
