import React, { useEffect } from 'react';
import remove from '../../assets/icons/error.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, setCount, setOpenCart, setTotal } from '../../redux/slices/cartSlice';
const CartItem = ({ imgUrls, name, color, storage, price, id, handleClick }) => {
  const dispatch = useDispatch();
  const { count, cart, openCart } = useSelector((state) => state.cart);
  const removeItem = (id) => {
    dispatch(deleteCart(id));
    dispatch(setTotal(-price));
    dispatch(setCount(-1));
    if (cart.length === 1) {
      dispatch(setOpenCart(!openCart));
    }
  };
  return (
    <div>
      <div className="flex justify-between gap-3 items-center py-5 border-b-2 pb-5">
        <div className="w-[60px]">
          <img src={imgUrls[0].url} alt="image" />
        </div>
        <div className="text-[14px] w-[170px] ">
          {/* <Link to={link} onClick={() => handleClick()}> */}
          <p className="font-semibold">{name}</p>
          <p className="font-light">
            Цвет: <span>{color.name}</span>
          </p>
          <p className="font-light">
            Память: <span>{storage}</span>
          </p>
          {/* </Link> */}
        </div>
        <p className="w-[120px] font-light">{price} сом</p>
        <div className="w-[20px] cursor-pointer hover:opacity-50" onClick={() => removeItem(id)}>
          <img src={remove} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
