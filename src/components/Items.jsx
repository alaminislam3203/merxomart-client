'use client';
import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const items = [
  {
    id: 1,
    title: 'Headphones',
    imgSrc: 'https://i.postimg.cc/JhwNwv96/bose_headphone_image.png',
  },
  {
    id: 2,
    title: 'Laptops',
    imgSrc: 'https://i.postimg.cc/9f3d3KvB/asus_laptop_image.png',
  },
  {
    id: 3,
    title: 'Smartphones',
    imgSrc: 'https://i.postimg.cc/DyMQ686t/samsung_s23phone_image.png',
  },
  {
    id: 4,
    title: 'Cameras',
    imgSrc: 'https://i.postimg.cc/JhbbRKLf/cannon_camera_image.png',
  },
  {
    id: 5,
    title: 'Watch',
    imgSrc: 'https://i.postimg.cc/pdNfN4gV/venu_watch_image.png',
  },
];

const Items = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-16 flex flex-col items-center bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800">
        Popular Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {items.map(item => (
          <div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center bg-gray-100 p-4"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={150}
              height={150}
              className="object-contain group-hover:scale-105 transition"
            />
            <p className="mt-3 text-sm md:text-base font-medium text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Items;
