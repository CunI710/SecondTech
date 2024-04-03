import React from 'react';

const Delivery = () => {
  const info = [
    {
      text: 'Бесплатная доставка по Бишкеку',
    },
    {
      text: 'Доставим в течении 2-3х часов',
    },
    {
      text: 'Оплата курьеру при получении товара',
    },
  ];

  return (
    <div>
      <h1 className="text-center py-5 text-first ">МАКСИМАЛЬНО УДОБНЫЕ СПОСОБЫ ДОСТАВКИ</h1>
      <div className="flex gap-5 justify-between">
        {info.map((item, i) => (
          <div key={i} className=" rounded-[3%] border border-[#fff] shadow-xl py-[40px] px-5 ">
            <p className="text-center text-[14px] font-light">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
