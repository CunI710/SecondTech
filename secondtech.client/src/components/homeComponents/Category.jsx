import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import phone from '../../assets/category-img/phone.png';
import laptop from '../../assets/category-img/laptop.png';
import tablet from '../../assets/category-img/tablet.png';
import sell from '../../assets/category-img/sell.png';

const category = [
  {
    id: 1,
    title: 'Телефон',
    path: '/smartphone',
    img: phone,
    className:
      'group relative flex h-48 items-end overflow-hidden rounded-3xl bg-white shadow-xl md:h-80',
  },
  {
    id: 3,
    title: 'Ноутбук',
    path: '/laptop',
    img: laptop,
    className:
      'group relative flex h-48 items-end overflow-hidden rounded-3xl  bg-white shadow-xl md:col-span-2 md:h-80',
  },
  {
    id: 3,
    title: 'Продать',
    path: '/sell',
    img: sell,
    className:
      'group relative flex h-48 items-end overflow-hidden rounded-3xl  bg-white shadow-xl md:col-span-2 md:h-80',
  },
  {
    id: 4,
    title: 'Планшет',
    path: '/tablet',
    img: tablet,
    className:
      'group relative flex h-48 items-end overflow-hidden rounded-3xl bg-white shadow-xl md:h-80',
  },
];
const Category = () => {
  return (
    <div className="mx-auto w-[90%] py-6 sm:py-8 lg:py-12">
      <div className="px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Категории</h2>
        </div>
        <div className="font-medium grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {category.map((item) => (
            <Link key={item.id} to={item.path} className={item.className}>
              <img
                src={item.img}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="brightness-75 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block  text-sm text-white md:ml-5 md:text-lg ">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
