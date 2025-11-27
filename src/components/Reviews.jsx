'use client';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    photo: 'https://randomuser.me/api/portraits/men/11.jpg',
    comment: 'Amazing product! Fast delivery and top quality.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@gmail.com',
    photo: 'https://randomuser.me/api/portraits/women/21.jpg',
    comment: 'Love the variety and easy navigation.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Mark Wilson',
    email: 'mark.wilson@gmail.com',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
    comment: 'Customer support was very helpful.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@gmail.com',
    photo: 'https://randomuser.me/api/portraits/women/41.jpg',
    comment: 'Great experience, will buy again!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael.brown@gmail.com',
    photo: 'https://randomuser.me/api/portraits/men/51.jpg',
    comment: 'Products are as described, very satisfied.',
    rating: 4,
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@gmail.com',
    photo: 'https://randomuser.me/api/portraits/women/61.jpg',
    comment: 'Quick delivery and excellent packaging.',
    rating: 5,
  },
  {
    id: 7,
    name: 'David Lee',
    email: 'david.lee@gmail.com',
    photo: 'https://randomuser.me/api/portraits/men/71.jpg',
    comment: 'Good quality, fair pricing.',
    rating: 4,
  },
  {
    id: 8,
    name: 'Sophia Martinez',
    email: 'sophia.martinez@gmail.com',
    photo: 'https://randomuser.me/api/portraits/women/81.jpg',
    comment: 'The website is very user-friendly.',
    rating: 5,
  },
  {
    id: 9,
    name: 'James Taylor',
    email: 'james.taylor@gmail.com',
    photo: 'https://randomuser.me/api/portraits/men/91.jpg',
    comment: 'Loved the deals and discounts!',
    rating: 4,
  },
  {
    id: 10,
    name: 'Olivia Thomas',
    email: 'olivia.thomas@gmail.com',
    photo: 'https://randomuser.me/api/portraits/women/95.jpg',
    comment: 'Excellent service and quality products.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="flex flex-col items-start px-6 md:px-16 lg:px-32 mt-12">
      <div className="flex flex-col items-start md:items-end">
        <p className="text-2xl font-medium text-gray-800">Customer Reviews</p>
        <div className="w-16 h-1 bg-orange-600 rounded-full mt-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
        {reviews.map(review => (
          <div
            key={review.id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition flex flex-col justify-between"
          >
            <p className="text-gray-600 mb-4">"{review.comment}"</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover shadow"
                />

                <div className="space-y-0.5">
                  <p className="font-medium text-gray-800 flex items-center gap-1">
                    <FaUser className="text-orange-500" />
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <MdEmail className="text-gray-400" />
                    {review.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Reviews;
