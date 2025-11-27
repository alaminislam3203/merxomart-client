'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/navigation';

const HomeProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          'https://merxomart-server.vercel.app/api/products'
        );
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data.slice(0, 5));
      } catch (error) {
        console.error(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-start px-6 md:px-16 lg:px-32 mt-12">
      {/* Page Title */}
      <div className="flex flex-col items-start md:items-end">
        <p className="text-2xl font-medium text-gray-800">Popular Products</p>
        <div className="w-16 h-1 bg-orange-600 rounded-full mt-1"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 w-full">
        {loading ? (
          <p className="text-gray-500 col-span-full text-center py-10">
            Loading products...
          </p>
        ) : products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center py-10">
            No products available.
          </p>
        )}
      </div>

      {/* All Products Button */}
      <div className="w-full flex justify-center mt-8">
        <button
          onClick={() => router.push('/all-products')}
          className="px-12 py-2.5 bg-orange-600 rounded text-white hover:bg-orange-700 transition"
        >
          All Products
        </button>
      </div>
    </div>
  );
};
export default HomeProducts;
