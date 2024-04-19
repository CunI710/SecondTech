import React, { useState } from 'react';
import First from './Banner/First';
import Second from './Banner/Second';
import Third from './Banner/Third';

import { Carousel } from 'antd';
import Fourth from './Banner/Fourth';
const list = [<First />, <Fourth />, <Third />, <Second />];
const Banner = () => {
  return (
    <Carousel autoplay fade className="mt-16 ">
      {list.map((item) => (
        <div className="relative min-h-[600px] justify-center flex items-center">{item}</div>
      ))}
    </Carousel>
  );
};

export default Banner;
