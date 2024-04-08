import React, { useState } from 'react';
import First from './Banner/First';
import Second from './Banner/Second';
import Third from './Banner/Third';
import nextIcon from '../../assets/icons/arrow-right.svg';

const Banner = () => {
  const [next, setNext] = useState(0);

  const handlePrev = () => {
    if (next === 0) {
      setNext(2);
    } else if (next > 0) {
      setNext(next - 1);
    } else {
      setNext(0);
    }
  };

  const handleNext = () => {
    if (next < 2) {
      console.log('fewfw');
      setNext(next + 1);
    } else {
      setNext(0);
    }
  };
  return (
    <div className="relative mt-16 min-h-[600px] justify-center flex items-center">
      <button className="relative z-10 mx-4" onClick={handlePrev}>
        <img src={nextIcon} alt="icon prev" className="rotate-180" />
      </button>

      {next === 0 && <First />}
      {next === 1 && <Second />}
      {next === 2 && <Third />}

      <button className="relative z-10 mx-4 " onClick={handleNext}>
        <img src={nextIcon} alt="icon next" />
      </button>
    </div>
  );
};

export default Banner;
