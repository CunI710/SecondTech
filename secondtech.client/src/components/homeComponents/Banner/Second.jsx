import React from 'react';
import homeBg from '../../../assets/background/home-bg2.png';

const Second = () => {
  return (
    <div className="bg-black w-screen">
      <img src={homeBg} alt="img" className="w-screen absolute top-0 left-0 z-100 h-[100%] " />
      <div className="text-white h-full relative z-10 flex flex-col gap-4 items-center py-[10%]">
        <h1 className=" text-5xl font-semibold">Широкий ассортимент</h1>
        <p className=" text-[18px] font-light">По доступным ценам</p>
      </div>
    </div>
  );
};

export default Second;
