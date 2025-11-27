'use client';
import React from 'react';
import {
  FaLock,
  FaUserShield,
  FaInfoCircle,
  FaEnvelope,
  FaGlobe,
  FaCheckCircle,
  FaServer,
  FaDatabase,
  FaHandHoldingHeart,
  FaBalanceScale,
  FaBan,
} from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold flex items-center gap-3 mb-6">
        <FaLock className="text-blue-600" /> Privacy Policy
      </h1>

      <p className="mb-6 text-lg">
        We value our users' personal information, security, and privacy above
        all else. This Privacy Policy explains how we collect, use, and protect
        your information.
      </p>

      {/* What Info We Collect */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaInfoCircle className="text-green-600" /> Information We Collect
        </h2>
        <ul className="space-y-2 ml-6">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-500" />
            Your name and email address
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-500" />
            Account-related information
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-500" />
            Browser, device, and IP address information
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-blue-500" />
            Cookies and analytics data
          </li>
        </ul>
      </section>

      {/* How We Use Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaUserShield className="text-purple-600" /> How We Use Information
        </h2>
        <ul className="space-y-2 ml-6">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Manage your account
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Ensure security and prevent fraud
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Provide support and improve user experience
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Send email notifications (with your consent)
          </li>
        </ul>
      </section>

      {/* Data Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaServer className="text-red-500" /> Data Security
        </h2>
        <p className="mb-2">We implement advanced security measures such as:</p>
        <ul className="space-y-2 ml-6">
          <li className="flex items-center gap-2">
            <FaDatabase className="text-red-500" /> Encrypted database storage
          </li>
          <li className="flex items-center gap-2">
            <FaDatabase className="text-red-500" /> Secure server protection
          </li>
          <li className="flex items-center gap-2">
            <FaDatabase className="text-red-500" /> Restricted access control
          </li>
        </ul>
      </section>

      {/* Rules & Regulations */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaBalanceScale className="text-orange-500" /> Website Rules &
          Regulations
        </h2>
        <ul className="space-y-2 ml-6">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-600" /> Copying or selling our
            content is strictly prohibited
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-600" /> Providing false
            information is not allowed
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-600" /> Spamming or harmful
            behavior is forbidden
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-600" /> Illegal activities are
            not permitted
          </li>
        </ul>
      </section>

      {/* Sharing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaGlobe className="text-blue-700" /> Do We Share Your Information?
        </h2>
        <p>
          No, we do not sell, trade, or share your personal information with
          third parties. It may only be shared with government authorities if
          required by law.
        </p>
      </section>

      {/* Your Rights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaHandHoldingHeart className="text-pink-600" /> Your Rights
        </h2>
        <ul className="space-y-2 ml-6">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> You can request deletion
            of your data
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> You can request data
            correction
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> You can unsubscribe from
            emails
          </li>
        </ul>
      </section>

      {/* Prohibited Activities */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaBan className="text-red-700" /> Prohibited Activities
        </h2>
        <ul className="space-y-2 ml-6">
          <li className="flex items-center gap-2">
            <FaBan className="text-red-500" /> Unauthorized access attempts are
            strictly forbidden
          </li>
          <li className="flex items-center gap-2">
            <FaBan className="text-red-500" /> Damaging or hacking the system is
            prohibited
          </li>
          <li className="flex items-center gap-2">
            <FaBan className="text-red-500" /> Creating fake user accounts is
            not allowed
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-3">
          <FaEnvelope className="text-blue-600" /> Contact Us
        </h2>
        <p>
          For any questions regarding our Privacy Policy, please reach out to us
          —
        </p>
        <p className="mt-2 font-semibold flex items-center gap-2">
          <FaEnvelope className="text-blue-500" /> support@gmail.com
        </p>
      </section>
    </div>
  );
}
