import React, { useEffect } from 'react';
import Banner from '../components/homeComponents/Banner';
import Category from '../components/homeComponents/Category';
import Advantages from '../components/homeComponents/Advantages';
import About from '../components/homeComponents/About';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-20 bg-[#E8E8E8] ">
        <Banner />
        <Category />
        <Advantages />
        <About />
      </div>
    </>
  );
};

export default Home;
