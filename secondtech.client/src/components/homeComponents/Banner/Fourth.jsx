import React from 'react';
import fourthBg from '../../../assets/background/fourthBg.avif';
import { Link } from 'react-router-dom';
const Fourth = () => (
  <div className="bg-black w-screen">
    <img
      src={fourthBg}
      alt="img"
      className="brightness-50 w-screen absolute top-0 left-0 z-100 h-[100%]"
    />
    <div className="text-white relative z-10 flex flex-col gap-4 justify-center items-center py-[10%] ">
      <h1 className="font-mont text-4xl font-semibold tracking-widest">БУ MacBook Pro</h1>
      <p className="font-mont text-[18px] font-light tracking-widest">
        Всего за <s className="text-first">94900 сом</s>
        <span className="font-normal"> 89900 сом</span>
      </p>
      <Link
        to="/laptop"
        className="bg-first text-white font-semibold py-3 px-[60px] rounded-[30px] duration-[0.3s] hover:bg-opacity-50 "
      >
        Купить
      </Link>
    </div>
  </div>
);
export default Fourth;
