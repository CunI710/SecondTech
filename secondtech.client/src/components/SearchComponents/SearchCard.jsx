import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductId } from '../../redux/slices/productsSlice';
import { Link } from 'react-router-dom';

const SearchCard = ({ item }) => {
  const { name, color, price, imgUrls, id, storage, category } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setProductId(id));
    localStorage.setItem('productId', id);
  };
  return (
    <Link
      to={category.name === 'Телефон' ? `/smartphone/${id}` : `/laptop/${id}`}
      target="_blank"
      className="text-[#000] flex gap-4"
      onClick={handleClick}
    >
      <div>
        <img src={imgUrls[0].url} alt="product image" className="w-[100px]" />
      </div>
      <div>
        <p className="text-[14px] ">{name}</p>
        <p className="text-[12px] text-gray-600">{color.name}</p>
        <p className="text-[14px]">{price} сом</p>
      </div>
    </Link>
  );
};

export default SearchCard;
