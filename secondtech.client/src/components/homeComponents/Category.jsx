import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import phone from '../../assets/category-img/phone.png';
import laptop from '../../assets/category-img/laptop.png';
import tablet from '../../assets/category-img/tablet.png';
import sell from '../../assets/category-img/sell.png';
const Category = () => {
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
    <div class="mx-auto w-[80%] py-6 sm:py-8 lg:py-12">
      <div class="px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Gallery</h2>
        </div>
        <div class="font-medium grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <Link
            to="/smartphone"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={phone}
              loading="lazy"
              alt="Photo by Minh Pham"
              class="brightness-75 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span class="relative ml-4 mb-3 inline-block  text-sm text-white md:ml-5 md:text-lg ">
              Телефоны
            </span>
          </Link>
          <Link
            to="/laptop"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={laptop}
              loading="lazy"
              alt="Photo by Magicle"
              class="brightness-75 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Ноутбуки
            </span>
          </Link>

          <Link
            to="/sell"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={sell}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="brightness-75 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Продать
            </span>
          </Link>

          <Link
            to="/tablet"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={tablet}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="brightness-75 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Планшеты
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
