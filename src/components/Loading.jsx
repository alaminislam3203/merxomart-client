'use client';
import { FaShopify } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <FaShopify className="animate-spin h-8 w-8 text-gray-700" />
    </div>
  );
};

export default Loading;
