import React, { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductId } from '../../redux/slices/productsSlice';
import { setCart, setCount, setTotal } from '../../redux/slices/cartSlice';

const ProductCard = ({ item }) => {
  const [toCard, setToCard] = useState(false);
  const { name, color, price, imgUrls, id, storage } = item;
  let path = useMatch('*');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setProductId(id));
    localStorage.setItem('productId', id);
  };

  const addCart = (item) => {
    setToCard(true);
    dispatch(setCart(item));
    dispatch(setTotal(item.price));
    dispatch(setCount(1));
  };

  // useEffect(() => {
  //   const cartItem = JSON.parse(localStorage.getItem('cartItem'));
  //   if (cartItem && cartItem.id === id) {
  //     console.log(true);
  //     setToCard(true);
  //   } else {
  //     console.log(false);
  //   }
  // }, [id]);
  console.log(imgUrls);
  return (
    <div className="bg-[#fff] flex transition-shadow duration-300 hover:shadow-lg  flex-col items-center border-none rounded-[10px] p-[26px] gap-5 justify-between text-center w-[265px] leading-[19.2p]">
      <img src={imgUrls[0].url} alt="product image" className="w-[210px]" />
      <Link to={`${path.pathname}/${id}`} onClick={() => handleClick()}>
        <p className="font-normal text-[14px]">
          {name} {storage} {color.name}
        </p>
      </Link>
      <p className="text-[18px]">{price} сом</p>
      <button
        onClick={() => addCart(item)}
        disabled={toCard}
        className={`cursor-pointer text-[13px] ${
          toCard ? 'bg-slate-500' : 'bg-first'
        } rounded-full w-[100%] text-[#fff] font-bold py-[15px]`}
      >
        {toCard ? 'Добавлено' : 'В корзину'}
      </button>
      <button>
        <Link to="" className="text-[13px] text-first font-normal ">
          Купить в один клик
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;
