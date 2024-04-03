import React from 'react';
import Banner from '../components/homeComponents/Banner';
import Header from '../Layouts/Header';
import Category from '../components/homeComponents/Category';
const Home = () => {
  return (
    <div className="flex flex-col gap-20 bg-[#E8E8E8] ">
      <Banner />
      <Category />
    </div>
  );
};

export default Home;
