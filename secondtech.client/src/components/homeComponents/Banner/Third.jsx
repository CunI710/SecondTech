import React from 'react';
import homeBg from '../../../assets/background/Frame_96.jpg';
import { Link } from 'react-router-dom';
const Third = () => {
  return (
    <div className="bg-black w-screen">
      <img
        src={homeBg}
        alt="img"
        className="brightness-50 w-screen absolute top-0 left-0 z-100 h-[100%]"
      />
      <div className="text-white relative z-10 flex flex-col gap-4 justify-center items-center py-[10%] ">
        <h1 className="font-mont text-4xl font-semibold tracking-widest">БУ iPhone 15</h1>
        <p className="font-mont text-[18px] font-light tracking-widest">
          Всего за <s className="text-first">74900 сом</s>
          <span className="font-normal"> 69900 сом</span>
        </p>
        <Link
          to="/smartphone"
          className="bg-first text-white font-semibold py-3 px-[60px] rounded-[30px] duration-[0.3s] hover:bg-opacity-50 "
        >
          Купить
        </Link>
      </div>
    </div>
  );
};

export default Third;
