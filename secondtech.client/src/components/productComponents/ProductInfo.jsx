import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductDescription from './ProductDescription';
import { getProductById } from '../../redux/slices/productsSlice';
import ProductSlider from './ProductSlider';
import Characteristics from './Tabs/Characteristics';
import Checkout from './Tabs/Checkout';
import Payment from './Tabs/Payment';
import Delivery from './Tabs/Delivery';
import { ProductTab } from '../../utils/defaultData';
import Collapses from './Tabs/Collapses';

const ProductInfo = () => {
  const [active, setActive] = useState('Характеристики');
  const [activeTab, setActiveTab] = useState(0);
  const { item } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem('productId');
    dispatch(getProductById(id));
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (title, i) => {
    setActive(title);
    setActiveTab(i);
  };

  return (
    <>
      <div className="w-[80%] m-auto my-[50px]">
        <div className="flex gap-5">
          <div className="flex-1">
            {item.length !== 0 ? <ProductSlider imgUrls={item.imgUrls} /> : <p>Загружаю данные</p>}
          </div>
          <div className="flex-1 mt-4">
            {item.length !== 0 ? <ProductDescription item={item} /> : <p>Загружаю данные</p>}
          </div>
        </div>
        <div>
          <div className="flex bg-[#FAFAFA] py-7 px-5 justify-between uppercase font-normal ">
            {ProductTab.map((item, i) => (
              <button
                key={i}
                className="uppercase"
                onClick={() => handleClick(item.title, item.link)}
              >
                <p
                  className={`cursor-pointer hover:text-first duration-300 ${
                    active === item.title ? 'text-first' : ''
                  }`}
                >
                  {item.title}
                </p>
              </button>
            ))}
          </div>
          <div>
            <div className="w-[90%] m-auto my-[50px]">
              {activeTab === 0 && <Characteristics item={item} />}
              {activeTab === 1 && <Checkout />}
              {activeTab === 2 && <Payment />}
              {activeTab === 3 && <Delivery />}
              {activeTab === 4 && <Collapses />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
