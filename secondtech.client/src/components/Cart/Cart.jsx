import React from 'react';
import close from '../../assets/icons/close.png';

import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenCart } from '../../redux/slices/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, total, openCart } = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(setOpenCart(!openCart));
  };

  return (
    <div
      className={`w-[35%] min-h-[100vh] bg-white absolute top-0 ${
        openCart ? 'right-0 ' : '-right-[100%] opacity-5'
      } transition-all duration-700  text-[#000]`}
    >
      <div className="flex flex-col w-[90%] gap-5 m-auto py-5">
        <div className="flex justify-between  pb-5">
          <h1 className="text-[20px] font-medium">Корзина</h1>
          <img
            src={close}
            alt="img"
            className="w-6 h-6 cursor-pointer"
            onClick={() => handleClick()}
          />
        </div>
        <div className="flex flex-col w-[90%] gap-5 m-auto py-5">
          <div className="border-t-2">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-end text-[18px]">
            <p className="font-medium">Сумма: {total} сом</p>
          </div>
          <Link
            className="text-center py-4 w-[100%] bg-first text-white font-medium rounded-full m-auto"
            to={`/order`}
            onClick={handleClick}
          >
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
