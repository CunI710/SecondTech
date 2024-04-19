import React, { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductId } from '../../redux/slices/productsSlice';
import { setCart, setCount, setTotal } from '../../redux/slices/cartSlice';

const ProductCard = ({ item }) => {
  const { name, color, price, imgUrls, id, storage } = item;
  let path = useMatch('*');
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const handleClick = () => {
    // dispatch(setProductId(id));
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
    <div className="bg-[#fff] flex transition-shadow duration-300 hover:shadow-lg  flex-col items-center border-none rounded-[10px] p-[26px] gap-3 justify-between text-center w-[265px] leading-[19.2p]">
      <div className="flex items-center h-[200px] overflow-hidden">
        <img src={imgUrls[0].url} alt="product image" className="w-[210px]" />
      </div>
      <Link to={`${path.pathname}/${id}`} onClick={() => handleClick()}>
        <p className="font-normal text-[14px] h-[50px]">
          {name} {storage} {color.name}
        </p>
      </Link>
      <p className="text-[18px]">{price} сом</p>
      <Link
        // onClick={() => addCart(item)}
        onClick={() => handleClick()}
        to={`${path.pathname}/${id}`}
        className="cursor-pointer text-[13px] bg-first rounded-full w-[100%] text-[#fff] font-bold py-[15px]"
      >
        В корзину
      </Link>
      <button>
        <Link
          to="/order"
          className="text-[13px] text-first font-normal"
          onClick={() => addCart(item)}
        >
          Купить в один клик
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;
