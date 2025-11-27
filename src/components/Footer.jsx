'use client';

import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaMailBulk,
  FaFacebook,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        {/* Logo & Description */}
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Merxomart — A modern and reliable online shopping destination where
            quality meets convenience. We bring you a wide range of premium
            products, fast delivery, secure payment, and a smooth shopping
            experience — all in one place. Our mission is to make online
            shopping simple, trusted, and enjoyable for everyone.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="/about-us">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="/contact">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="hover:underline transition"
                  href="/privacy-policy"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Social Links</h2>
            <ul className="text-xl space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/alamin320"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/alamin_codes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alamin_codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alaminislam3203/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>
                <FaPhone className="inline-block mr-2" /> +8801313334279
              </p>
              <p>
                {' '}
                <FaMailBulk className="inline-block mr-2" />{' '}
                contact@merxomart.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © MerxoMart All Right Reserved.
      </p>
    </footer>
  );
};
export default Footer;
