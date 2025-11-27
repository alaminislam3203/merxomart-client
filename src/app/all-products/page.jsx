'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://merxomart-server.vercel.app/api/products'
        );
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
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
    <main className="flex flex-col items-start px-6 md:px-16 lg:px-32 mt-12">
      {/* Page Title */}
      <div className="flex flex-col items-start md:items-end">
        <p className="text-2xl font-medium text-gray-800">All Products</p>
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
    </main>
  );
};
export default AllProducts;
