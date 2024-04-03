import React from 'react';
import money from '../../../assets/icons/business-and-finance.png';
import creditCard from '../../../assets/icons/credit-card.png';
import delivery from '../../../assets/icons/delivery-man.png';
const Payment = () => {
  const info = [
    {
      icon: money,
      text: 'Оплата наличными',
    },
    {
      icon: creditCard,
      text: 'Оплата картой',
    },
    {
      icon: delivery,
      text: 'Оплата на месте курьеру',
    },
  ];
  return (
    <div className="flex justify-between ">
      {info.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 w-[300px] items-center py-[40px] px-5 rounded-[3%] border border-[#fff] shadow-xl "
        >
          <img src={item.icon} alt="image" className="w-[46px]" />
          <p className="text-[16px] font-light">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Payment;
