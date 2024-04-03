import React, { useEffect, useState } from 'react';
import ProductSlider from './ProductSlider';
import productImg from '../../assets/product/iphone12.png';
import productImg2 from '../../assets/product/iphone13.png';
import ProductDescription from './ProductDescription';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/slices/productsSlice';
import Characteristics from './Tabs/Characteristics';
import Checkout from './Tabs/Checkout';
import Payment from './Tabs/Payment';
import Delivery from './Tabs/Delivery';
const ProductInfo = () => {
  const [active, setActive] = useState('Характеристики');
  const [activeTab, setActiveTab] = useState(0);
  const { item } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem('productId');
    dispatch(getProductById(id));
  }, []);

  const navLink = [
    {
      title: 'Характеристики',
      link: 0,
    },
    {
      title: 'Как оформить заказ',
      link: 1,
    },
    {
      title: 'Способы оплаты',
      link: 2,
    },
    {
      title: 'Доставка',
      link: 3,
    },
    {
      title: 'Часто задаваемые вопросы',
      link: 5,
    },
  ];

  const handleClick = (title, i) => {
    setActive(title);
    setActiveTab(i);
  };

  return (
    <div className="w-[80%] m-auto my-[100px]">
      <div className="flex gap-5">
        <div className="flex-1">
          <ProductSlider />
        </div>
        <div className="flex-1">
          {item.length !== 0 ? <ProductDescription {...item} /> : <p>Загружаю данные</p>}
        </div>
      </div>
      <div>
        <div className="flex bg-[#FAFAFA] py-7 px-5 justify-between uppercase font-normal ">
          {navLink.map((item, i) => (
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
            {activeTab === 4 && <p>4</p>}
            {activeTab === 5 && <p>5</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
