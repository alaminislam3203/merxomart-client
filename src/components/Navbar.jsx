'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiUser, FiMail, FiEdit, FiPlus, FiLogOut } from 'react-icons/fi';
import { assets } from '@/assets/assets';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => (window.location.href = '/')}
          >
            <Image src={assets.logo} alt="Logo" width={120} height={40} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link href="/" className="hover:text-green-500 transition">
              Home
            </Link>
            <Link
              href="/all-products"
              className="hover:text-green-500 transition"
            >
              Products
            </Link>
            <Link href="/about-us" className="hover:text-green-500 transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-green-500 transition">
              Contact
            </Link>
          </div>

          {/* Right side buttons / user */}
          <div className="hidden md:flex md:items-center md:gap-4 relative">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="text-black px-4 py-1.5 border border-gray-400 rounded-md hover:bg-gray-100 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-1.5 bg-black text-white rounded-md hover:bg-gray-800 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-md hover:bg-gray-100 transition"
                >
                  {/* User Avatar */}
                  <img
                    className="w-9 h-9 rounded-full cursor-pointer"
                    src={user?.photoURL || assets.user_icon}
                    alt="User Avatar"
                    onError={e => (e.target.src = assets.user_icon)}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    {/* User Info */}
                    <div className="px-4 py-3 bg-gray-50 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-200">
                        <img
                          src={user?.photoURL || assets.user_icon}
                          alt="User"
                          className="w-full h-full object-cover"
                          onError={e => (e.target.src = assets.user_icon)}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 flex items-center gap-1">
                        <FiUser /> {user.displayName || 'No Name'}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                        <FiMail /> {user.email || 'No Email'}
                      </span>
                    </div>

                    {/* Dropdown Links */}
                    <div className="flex flex-col">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <FiUser />
                        Profile
                      </Link>
                      <Link
                        href="/add-product"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <FiPlus /> Add Product
                      </Link>
                      <Link
                        href="/manage-products"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <FiEdit /> Manage Products
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 font-medium transition"
                      >
                        <FiLogOut /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link
            href="/all-products"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Products
          </Link>
          <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-100">
            About Us
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </Link>

          {!user ? (
            <>
              <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                Login
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="px-4 py-2 border-t border-gray-200 text-gray-700">
                {user.email || user.displayName}
              </div>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Profile
              </Link>
              <Link
                href="/add-product"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Add Product
              </Link>
              <Link
                href="/manage-products"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Manage Products
              </Link>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
