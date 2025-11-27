'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaTrashAlt, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export default function ManageProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);

  // Firebase Auth check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        router.push('/login');
      } else {
        setAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        'https://merxomart-server.vercel.app/api/products'
      );
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to load products!',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authLoading) {
      fetchProducts();
    }
  }, [authLoading]);

  // Delete product function
  const deleteProduct = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `https://merxomart-server.vercel.app/api/products/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to delete product');
      }

      setProducts(prev => prev.filter(p => p._id !== id));
      Swal.fire('Deleted!', 'Product has been deleted.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', error.message, 'error');
    }
  };

  // View product
  const viewProduct = id => {
    router.push(`/product/${id}`);
  };

  if (authLoading) {
    return (
      <p className="px-6 py-12 text-gray-500">Checking authentication...</p>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-32 py-12">
      <h1 className="text-3xl font-semibold mb-6">Manage Products</h1>

      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product._id}
              className="bg-white border rounded-xl shadow-sm flex flex-col gap-3 p-4 hover:shadow-lg transition relative"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name & Description */}
              <p className="font-medium text-lg truncate">{product.name}</p>
              <p className="text-gray-600 text-sm truncate">
                {product.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-2">
                <button
                  onClick={() => viewProduct(product._id)}
                  className="flex items-center gap-1 text-blue-600 border border-blue-400 px-3 py-1 rounded hover:bg-blue-50 transition text-sm"
                >
                  <FaEye /> View
                </button>

                <button
                  onClick={() => deleteProduct(product._id)}
                  className="flex items-center gap-1 text-red-600 border border-red-400 px-3 py-1 rounded hover:bg-red-50 transition text-sm"
                >
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
