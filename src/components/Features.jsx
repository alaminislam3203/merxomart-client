'use client';
import React from 'react';
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaSyncAlt,
} from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaShippingFast className="text-3xl text-orange-500" />,
    title: 'Fast Shipping',
    description:
      'Get your products delivered quickly and safely right to your doorstep.',
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-3xl text-orange-500" />,
    title: 'Secure Payments',
    description:
      'All transactions are 100% secure and encrypted for your peace of mind.',
  },
  {
    id: 3,
    icon: <FaHeadset className="text-3xl text-orange-500" />,
    title: '24/7 Support',
    description:
      'Our support team is always available to help you with your needs.',
  },
  {
    id: 4,
    icon: <FaSyncAlt className="text-3xl text-orange-500" />,
    title: 'Easy Returns',
    description:
      'Hassle-free returns and exchanges within 30 days of purchase.',
  },
];

const Features = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-16 bg-gray-50 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {features.map(feature => (
          <div
            key={feature.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center gap-4"
          >
            <div>{feature.icon}</div>
            <h3 className="text-lg font-medium text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
