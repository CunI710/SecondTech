import React from 'react';
import homeBg from '../../../assets/background/home-bg.png';
import { Link } from 'react-router-dom';
const First = () => {
  return (
    <div className="bg-black w-screen">
      <img src={homeBg} alt="img" className="w-screen absolute top-0 left-0 z-100 h-[100%]" />
      <div className="text-white relative z-10 flex flex-col gap-4 justify-center items-center py-[10%] ">
        <h1 className="font-mont text-4xl font-semibold">БУ iPhone 15 Pro</h1>
        <p className="font-mont text-[18px] font-light">По доступным ценам</p>
        <Link to="/smartphone" className="bg-first  py-3 px-[60px] rounded-full  font-semibold ">
          Купить
        </Link>
      </div>
    </div>
  );
};

export default First;
