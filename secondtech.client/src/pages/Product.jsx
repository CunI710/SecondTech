import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTrail, animated } from 'react-spring';
import ProductCard from '../components/productComponents/ProductCard';
import Filter from '../components/productComponents/Filter';
import EmptyProduct from '../components/UI/EmptyProduct';
import MyPagination from '../components/UI/MyPagination';

const Product = ({ banner, title }) => {
  const dispatch = useDispatch();
  const { products, isLoading, currentPage } = useSelector((state) => state.products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'translate3d(0, -60px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });
  console.log(products);
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
            <Filter />
            <div>
              <input type="text" placeholder="iPhone 15 ..." />
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-4 grid-rows-3 gap-5">
              {trail.map((style, index) => (
                <animated.div key={products[index].id} style={style}>
                  <ProductCard item={products[index]} path={title} />
                </animated.div>
              ))}
            </div>
          ) : (
            <EmptyProduct />
          )}
        </div>
        <MyPagination />
      </div>
    </>
  );
};

export default Product;
