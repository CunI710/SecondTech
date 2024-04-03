import React from 'react';
import homeBg from '../../assets/background/home-bg.png';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="relative mt-16 min-h-[600px] bg-black flex justify-center items-center">
      <img src={homeBg} alt="img" className="w-screen absolute top-0 left-0 z-0 h-[100%]" />
      <div className="text-white relative z-10 flex flex-col gap-3 items-center py-[10%]">
        <h1 className="font-mont text-4xl font-semibold">iPhone 15 Pro</h1>
        <p className="font-mont text-[18px] font-light">Доступен в рассрочку</p>
        <Link
          to=""
          className="bg-first  py-3 px-[60px] rounded-[30px] duration-[0.3s] hover:bg-opacity-50 "
        >
          Купить
        </Link>
      </div>
    </div>
  );
};

export default Banner;
