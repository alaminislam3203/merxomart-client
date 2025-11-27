import { Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/context/AuthContext';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata = {
  title: 'MerxoMart',
  description: 'E-Commerce with Next.js ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased text-gray-700 bg-gray-50`}
      >
        <Toaster />

        <AuthProvider>
          <AppProvider>
            {' '}
            <Navbar />
            {children}
            <Footer />
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
