import React from 'react';
import close from '../../assets/icons/close.png';

import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
const Cart = ({ cartOpen, setCartOpen }) => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  console.log(cart);
  const handleClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div
      className={`w-[35%] min-h-[100vh] bg-white absolute top-0 ${
        cartOpen ? 'right-0 ' : '-right-[100%] opacity-5'
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
        <div className="border-t-2">
          {cart.length !== 0 ? (
            cart.map((item, i) => <CartItem key={item.id} {...item} />)
          ) : (
            <p>Корзина пустая</p>
          )}
        </div>
        <div className="flex justify-end text-[18px]">
          <p className="font-medium">Сумма: {total} сом</p>
        </div>
        <Link
          className="text-center py-4 w-[100%] bg-first text-white font-medium rounded-full m-auto"
          to="/order"
        >
          Оформить заказ
        </Link>
      </div>
    </div>
  );
};

export default Cart;
