import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/slices/productsSlice';
import Filter from '../../productComponents/Filter';
import Card from '../Card';
import DeleteProduct from './Delete/DeleteProduct';
import UpdateProduct from './Update/UpdateProduct';

const navList = [
  {
    id: 1,
    title: 'id',
  },
  {
    id: 2,
    title: 'Название',
  },
  {
    id: 3,
    title: 'Цена',
  },
  {
    id: 4,
    title: 'Категория',
  },
  {
    id: 5,
    title: 'Состояние',
  },
  {
    id: 6,
    title: 'Цвет',
  },
  {
    id: 7,
    title: 'ОЗУ',
  },
  {
    id: 8,
    title: 'Память',
  },
  {
    id: 9,
    title: 'Процессор',
  },
];
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts(''));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#fcfcfc]">
        <div className="w-[95%] m-auto py-20 text-black flex flex-col gap-[30px] ">
          <div className="flex justify-between">
            <Filter />
            <div>search</div>
          </div>
          <ul className="text-first font-semibold grid grid-cols-10 grid-rows-1 gap-5 ">
            <li></li>
            {navList.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-5">
            {products.map((item, id) => (
              <Card key={item.id} {...item} tableId={id + 1} />
            ))}
          </div>
          <DeleteProduct />
          <UpdateProduct />
        </div>
      </div>
    </>
  );
};

export default Products;
