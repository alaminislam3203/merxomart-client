/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      'scontent.fspd3-1.fna.fbcdn.net',
      'scontent.fspd6-1.fna.fbcdn.net',
      'lh3.googleusercontent.com',
      'raw.githubusercontent.com',
      'i.postimg.cc',
    ],
  },
};

export default nextConfig;
