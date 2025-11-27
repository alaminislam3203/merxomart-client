'use client';
import React from 'react';
import Banner from '@/components/Banner';
import HeaderSlider from '@/components/HeaderSlider';
import HomeProducts from '@/components/HomeProducts';
import Reviews from '@/components/Reviews';
import Features from '@/components/Features';
import Items from '@/components/Items';

const Home = () => {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-32">
        <Banner />
        <HeaderSlider />
        <HomeProducts />
        <Items />
        <Reviews />
        <Features />
      </div>
    </>
  );
};

export default Home;
