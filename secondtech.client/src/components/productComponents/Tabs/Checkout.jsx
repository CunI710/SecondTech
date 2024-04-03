import React from 'react';

const Checkout = () => {
  const info = [
    {
      id: '01',
      title: 'Оформление заказа',
      subtitle:
        'Заполните форму заказа, указав необходимые контактные данные, адрес доставки, а также выберите удобный способ оплаты и доставки.',
    },
    {
      id: '02',
      title: 'Подтверждение заказа',
      subtitle:
        'Мы оперативно свяжемся с вами в течение 5 минут после оформления заказа для подтверждения деталей.',
    },
    {
      id: '03',
      title: 'Получение товара',
      subtitle:
        'Ожидайте доставки или заберите ваш заказ самостоятельно по указанному адресу после подтверждения.',
    },
  ];

  return (
    <div className="flex gap-5 justify-between ">
      {info.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-3 py-5 px-5 rounded-[3%] border border-[#fff] shadow-xl ]"
        >
          <h2 className="text-[24px] text-first">{item.id}</h2>
          <h2 className="text-[20px] font-medium">{item.title}</h2>
          <p className="text-[14px] font-light ">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
