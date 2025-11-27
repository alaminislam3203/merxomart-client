'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Loading from '@/components/Loading';
import ProductCard from '@/components/ProductCard';
import { useAppContext } from '@/context/AppContext';

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { products, addToCart, loading } = useAppContext();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (!loading) {
      // MongoDB _id is a string
      const foundProduct = products.find(p => p._id === id);

      if (!foundProduct) {
        router.push('/404');
      } else {
        setProduct(foundProduct);
        setMainImage(foundProduct.imgSrc);
      }
    }
  }, [id, products, loading, router]);

  if (loading || !product) return <Loading />;

  return (
    <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Image Section */}
        <div className="px-5 lg:px-16 xl:px-20">
          <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
            <Image
              src={mainImage}
              alt={product.name}
              className="w-full h-auto object-cover"
              width={1280}
              height={720}
            />
          </div>
        </div>

        {/* Right Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  className="h-4 w-4"
                  src={
                    i < Math.floor(product.rating)
                      ? assets.star_icon
                      : assets.star_dull_icon
                  }
                  alt="star"
                />
              ))}
            </div>
            <p>({product.rating})</p>
          </div>

          <p className="text-gray-600 mt-3">{product.descriptionDetail}</p>

          {/* Price */}
          <p className="text-3xl font-medium mt-6">{product.price}</p>

          <hr className="bg-gray-600 my-6" />

          {/* Product Info Table */}
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full max-w-72">
              <tbody>
                <tr>
                  <td className="text-gray-600 font-medium">Brand</td>
                  <td className="text-gray-800/50">
                    {product.brand || 'Generic'}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 font-medium">Category</td>
                  <td className="text-gray-800/50">
                    {product.category || 'General'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4">
            <button
              onClick={() => addToCart(product._id)}
              className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(product._id);
                router.push('/cart');
              }}
              className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-4 mt-16">
          <p className="text-3xl font-medium">
            Featured <span className="text-orange-600">Products</span>
          </p>
          <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
          {products.slice(0, 5).map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>

        <button
          onClick={() => router.push('/all-products')}
          className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
        >
          See more
        </button>
      </div>
    </div>
  );
};
export default ProductDetails;
