import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/productsSlice';
import ProductCard from '../components/productComponents/ProductCard';

const Product = ({ category, banner, title }) => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(category));
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      <div className="bg-[#fcfcfc]">
        <div className="w-[80%] m-auto py-20 text-black flex flex-col gap-[30px] ">
          <div className="relative">
            <img src={banner} alt="image" className="" />
            <p
              className={`absolute top-[30%] left-[30%] text-[60px] font-bold ${
                title === 'Смартфоны' ? 'text-black' : 'text-white'
              }`}
            >
              {title}
            </p>
          </div>
          <div className="flex justify-between">
            <div>filter</div>
            <div>search</div>
          </div>
          <div className="grid grid-cols-4 grid-rows-3 gap-5">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} path={title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
