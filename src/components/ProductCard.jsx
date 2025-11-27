'use client';
import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const goToDetails = () => {
    router.push(`/product/${product._id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="flex flex-col items-start gap-1 max-w-[200px] w-full cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative group bg-gray-100 rounded-lg w-full h-52 flex items-center justify-center">
        <Image
          src={product.imgSrc}
          alt={product.name}
          className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
          width={800}
          height={800}
        />

        {/* Favorite Button */}
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
          onClick={e => e.stopPropagation()}
        >
          <Image src={assets.heart_icon} alt="favorite" className="h-4 w-4" />
        </button>
      </div>

      {/* Product Name */}
      <p className="font-medium text-sm md:text-base truncate w-full">
        {product.name}
      </p>

      {/* Short Description */}
      <p className="text-xs text-gray-500/70 max-sm:hidden truncate w-full">
        {product.description}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <p className="text-xs">{product.rating}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={
                i < Math.floor(product.rating)
                  ? assets.star_icon
                  : assets.star_dull_icon
              }
              alt="star"
              className="h-3 w-3"
            />
          ))}
        </div>
      </div>

      {/* Price & Buy Button */}
      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium">{product.price}</p>

        <button
          onClick={e => {
            e.stopPropagation();
            goToDetails();
          }}
          className="max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
