'use client';
import React from 'react';
import {
  FaUsers,
  FaBullseye,
  FaHistory,
  FaCheckCircle,
  FaStar,
  FaRocket,
} from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-20">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
        About <span className="text-orange-600">Us</span>
      </h1>
      <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
        Learn more about who we are, what we do, and why we do it.
      </p>

      {/* Section 1 - Our Story */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-3">
            <FaHistory className="text-orange-600 text-3xl" /> Our Story
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We started our journey with a simple mission — to bring high-quality
            products to customers at the best value. Over the years, we’ve grown
            into a trusted eCommerce brand known for quality, service, and
            innovation.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Our focus has always been customer satisfaction. That’s why every
            product is handpicked, tested, and delivered with care.
          </p>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg"
            alt="Our team"
            className="rounded-2xl shadow-md w-full"
          />
        </div>
      </div>

      {/* Section 2 - Mission & Vision */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="bg-white shadow-md border border-gray-100 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-gray-800">
            <FaBullseye className="text-orange-600 text-2xl" /> Our Mission
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            To deliver quality products at affordable prices while maintaining a
            personalized customer experience.
          </p>
        </div>

        <div className="bg-white shadow-md border border-gray-100 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-gray-800">
            <FaRocket className="text-orange-600 text-2xl" /> Our Vision
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            To become one of the most trusted global eCommerce platforms
            providing convenience and reliability to everyone.
          </p>
        </div>
      </div>

      {/* Section 3 - Why Choose Us */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold text-center text-gray-800 flex items-center justify-center gap-3">
          <FaStar className="text-orange-600 text-3xl" /> Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="p-8 bg-white shadow-md rounded-2xl border border-gray-100 text-center">
            <FaCheckCircle className="text-orange-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Quality Products</h3>
            <p className="text-gray-600 mt-2">
              Every product is tested for quality and durability.
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl border border-gray-100 text-center">
            <FaUsers className="text-orange-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Customer First</h3>
            <p className="text-gray-600 mt-2">
              Your satisfaction is always our highest priority.
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl border border-gray-100 text-center">
            <FaRocket className="text-orange-600 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Quick, reliable shipping to your doorstep.
            </p>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold text-center text-gray-800 flex items-center gap-3 justify-center">
          <FaUsers className="text-orange-600 text-3xl" /> Our Team
        </h2>
        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
          A passionate team working together to deliver the best experience for
          our customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {/* Member 1 */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <img
              src="https://i.ibb.co.com/FLfQvdsF/Air-Brush-20251118144236.jpg"
              alt="Team Member"
              className="rounded-full w-28 h-28 object-cover mx-auto shadow"
            />
            <h3 className="text-xl font-semibold mt-4">Al-amin Islam</h3>
            <p className="text-gray-500 text-sm">Founder & CEO</p>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="Team Member"
              className="rounded-full w-28 h-28 object-cover mx-auto shadow"
            />
            <h3 className="text-xl font-semibold mt-4">Sarah Khan</h3>
            <p className="text-gray-500 text-sm">Creative Director</p>
          </div>

          {/* Member 3 */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              alt="Team Member"
              className="rounded-full w-28 h-28 object-cover mx-auto shadow"
            />
            <h3 className="text-xl font-semibold mt-4">Rakib Hasan</h3>
            <p className="text-gray-500 text-sm">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
