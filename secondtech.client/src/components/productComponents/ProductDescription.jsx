import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setCount, setOpenCart, setTotal } from '../../redux/slices/cartSlice';

const ProductDescription = ({ item }) => {
  const { name, color, price, brand, description, imgUrls, id, storage } = item;
  const dispatch = useDispatch();
  const { cart, openCart } = useSelector((state) => state.cart);

  const addCart = (item) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      dispatch(setCart(item));
      dispatch(setTotal(item.price));
      dispatch(setCount(1));
      dispatch(setOpenCart(!openCart));
    } else {
      dispatch(setOpenCart(!openCart));
    }
  };
  return (
    <div className="py-16 flex flex-col gap-5 text-[#000]">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-[24px]">{name}</h2>
        <p className="text-[14px] font-light">{brand.name}</p>
      </div>
      <p className="font-normal text-[#000]">{price} сом.</p>
      <div className="flex flex-col gap-1">
        <p className="text-[12px] font-light">Цвет</p>
        <div className="text-[14px] font-normal flex">
          <p className="border border-black  py-1 px-3">{color.name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[12px] font-light ">Память</p>
        <div className="text-[14px] font-normal flex">
          <p className="border border-black  py-1 px-3">{storage} ГБ</p>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={() => addCart(item)}
          className="bg-first py-3 px-[40px] rounded-[30px] text-[12px] font-bold text-white"
        >
          В корзину
        </button>
      </div>

      <div className="font-light text-[12px] leading-[184%]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
