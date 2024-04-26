import React, { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCart, setCount, setTotal } from '../../redux/slices/cartSlice';

const ProductCard = ({ item }) => {
  const { name, color, price, imgUrls, id, storage } = item;
  let path = useMatch('*');
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const handleClick = () => {
    localStorage.setItem('productId', id);
  };

  const addCart = (item) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      dispatch(setCart(item));
      dispatch(setTotal(item.price));
      dispatch(setCount(1));
    }
  };

  return (
    <div className="bg-[#fff] flex transition-shadow duration-300 hover:shadow-2xl  flex-col items-start border-none rounded-[20px] p-[26px] gap-5 justify-between text-center w-[265px] h-[100%]">
      <div className="flex items-center h-[250px] overflow-hidden  rounded-[10px]">
        <img
          src={imgUrls[0].url}
          alt="product image"
          className="w-[210px] transition-scale duration-300 hover:scale-105"
        />
      </div>

      <Link
        to={`${path.pathname}/${id}`}
        onClick={() => handleClick()}
        className="flex flex-col gap-2 items-start"
      >
        <p className="font-medium text-[16px]">{name}</p>
        <p className="text-[14px] font-light">{price} сом</p>
      </Link>

      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-[12px] font-light">Цвет</p>
          <p className="border-[0.5px] border-black text-[12px] py-1 px-2 font-normal">
            {color.name}
          </p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <p className="text-[12px] font-light">Память</p>
          <p className="border-[0.5px] border-black text-[12px] py-1 px-2 font-normal">{storage}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[100%]">
        <Link
          onClick={() => handleClick()}
          to={`${path.pathname}/${id}`}
          className="text-[13px] bg-first font-medium rounded-full w-[100%] text-[#fff] py-[15px]"
        >
          В корзину
        </Link>

        <Link
          to="/order"
          className="text-[13px] bg-black font-medium   rounded-full w-[100%] text-[#fff] py-[15px]"
          onClick={() => addCart(item)}
        >
          Купить в один клик
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
