import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../../utils/constants';
import phone from '../../assets/category-img/phone.png';
import laptop from '../../assets/category-img/laptop.png';
import tablet from '../../assets/category-img/tablet.png';
import sell from '../../assets/category-img/sell.png';
import { Link } from 'react-router-dom';
const Category = () => {
  //   useEffect(() => {
  //     const getCategory = async () => {
  //       try {
  //         const { data } = await axios.get(`${BASE_URL}/Category/getall`);
  //         console.log(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getCategory();
  //   }, []);

  const category = [
    {
      id: 1,
      title: 'Телефон',
      path: '/',
      img: phone,
      size: 'col-span-2',
      position: 'top-[45%] left-[40%]',
    },
    {
      id: 2,
      title: 'Планшет',
      path: '/',
      img: tablet,
      size: '',
      position: 'top-5 left-5',
    },
    {
      id: 3,
      title: 'Продать',
      path: '/',
      img: sell,
      size: '',
      position: 'top-5 left-[35%]',
    },
    {
      id: 4,
      title: 'Ноутбук',
      path: '/',
      img: laptop,
      size: 'col-span-2',
      position: 'top-5 left-5',
    },
  ];

  return (
    <div className="w-[80%] m-auto ">
      <h1 className="text-[#454545] text-[27px] font-bold">Каталог товаров</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-3  text-black font-bold text-[26px]">
        <Link to="/smartphone" className="col-span-2 relative cursor-pointer">
          <img src={phone} alt="img" className="h-[100%] w-[100%] " />
          <p className="absolute top-[45%] left-[40%]">Телефоны</p>
        </Link>
        <Link to="/" className="relative cursor-pointer">
          <img src={tablet} alt="img" className="h-[100%] w-[100%]" />
          <p className="absolute top-5 left-5">Планшеты</p>
        </Link>
        <Link to="/" className="relative cursor-pointer">
          <img src={sell} alt="img" className="h-[100%] w-[100%]" />
          <p className="absolute top-5 left-[35%]">Продать</p>
        </Link>
        <Link to="/laptop" className="col-span-2 relative cursor-pointer">
          <img src={laptop} alt="img" className="h-[100%] w-[100%]" />
          <p className="absolute top-5 left-5 ">Ноутбуки</p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
